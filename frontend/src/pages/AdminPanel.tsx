import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Plus, Edit, Trash2, Settings, BarChart3, Users, LogOut } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

interface AdminCar {
  id: string;
  name: string;
  modelCode: string;
  category: string;
  price: number;
  rating: number;
  isAvailable: boolean;
  createdAt: string;
}

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState<AdminCar[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalCars: 0,
    availableCars: 0,
    totalValue: 0,
    avgRating: 0
  });

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchCars();
    fetchStats();
  }, [navigate]);

  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cars?limit=100');
      if (response.ok) {
        const data = await response.json();
        setCars(data.data);
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cars');
      if (response.ok) {
        const data = await response.json();
        const allCars = data.data;

        const totalCars = allCars.length;
        const availableCars = allCars.filter((car: AdminCar) => car.isAvailable).length;
        const totalValue = allCars.reduce((sum: number, car: AdminCar) => sum + car.price, 0);
        const avgRating = allCars.length > 0
          ? allCars.reduce((sum: number, car: AdminCar) => sum + car.rating, 0) / allCars.length
          : 0;

        setStats({
          totalCars,
          availableCars,
          totalValue,
          avgRating: Math.round(avgRating * 10) / 10
        });
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleDeleteCar = async (carId: string) => {
    if (!confirm('Are you sure you want to delete this car?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/cars/${carId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setCars(cars.filter(car => car.id !== carId));
        fetchStats(); // Refresh stats
      } else {
        alert('Error deleting car');
      }
    } catch (error) {
      console.error('Error deleting car:', error);
      alert('Error deleting car');
    }
  };

  const handleToggleAvailability = async (carId: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cars/${carId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          isAvailable: !currentStatus
        })
      });

      if (response.ok) {
        setCars(cars.map(car =>
          car.id === carId
            ? { ...car, isAvailable: !currentStatus }
            : car
        ));
        fetchStats(); // Refresh stats
      }
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-3">
              <Settings className="h-8 w-8 text-bmw-blue" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">BMW Admin Panel</h1>
                <p className="text-sm text-gray-600">Manage your car inventory</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/models')}
              className="bg-bmw-blue text-white px-4 py-2 rounded-lg hover:bg-bmw-blue-dark transition-colors"
            >
              View Public Site
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-bmw-blue" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Cars</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalCars}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="h-3 w-3 bg-white rounded-full"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Available</p>
                <p className="text-2xl font-bold text-gray-900">{stats.availableCars}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">$</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">${stats.totalValue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">★</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">{stats.avgRating}/5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cars Management */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Car Inventory</h2>
              <button className="bg-bmw-blue text-white px-4 py-2 rounded-lg hover:bg-bmw-blue-dark transition-colors flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add New Car
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Car Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cars.map((car) => (
                  <tr key={car.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{car.name}</div>
                        <div className="text-sm text-gray-500">{car.modelCode}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                        {car.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${car.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-1">{car.rating}</span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.floor(car.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleAvailability(car.id, car.isAvailable)}
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          car.isAvailable
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {car.isAvailable ? 'Available' : 'Unavailable'}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-bmw-blue hover:text-bmw-blue-dark transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCar(car.id)}
                          className="text-red-600 hover:text-red-900 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {cars.length === 0 && (
            <div className="text-center py-12">
              <Car className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No cars</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding your first car.</p>
              <div className="mt-6">
                <button className="bg-bmw-blue text-white px-4 py-2 rounded-lg hover:bg-bmw-blue-dark transition-colors">
                  <Plus className="h-4 w-4 inline mr-2" />
                  Add New Car
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-6 w-6 text-bmw-blue mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
            </div>
            <p className="text-gray-600 mb-4">View detailed analytics and reports</p>
            <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
              View Reports
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-bmw-blue mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
            </div>
            <p className="text-gray-600 mb-4">Manage user accounts and permissions</p>
            <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
              Manage Users
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-bmw-blue mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
            </div>
            <p className="text-gray-600 mb-4">Configure system settings and preferences</p>
            <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
              System Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
