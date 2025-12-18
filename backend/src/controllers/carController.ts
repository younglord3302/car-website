import { Request, Response } from 'express';
import Car from '../models/Car';

// Create a new car
export const createCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;

    // Check if car with same ID already exists
    const existingCar = await Car.findOne({ id: carData.id });
    if (existingCar) {
      return res.status(400).json({
        success: false,
        error: 'Car with this ID already exists'
      });
    }

    const newCar = new Car(carData);
    const savedCar = await newCar.save();

    res.status(201).json({
      success: true,
      message: 'Car created successfully',
      data: savedCar
    });
  } catch (error) {
    console.error('Error creating car:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create car'
    });
  }
};

// Get all cars with optional filtering
export const getCars = async (req: Request, res: Response) => {
  try {
    const {
      category,
      minPrice,
      maxPrice,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      limit = 10,
      page = 1,
      search
    } = req.query;

    const query: any = { isAvailable: true };

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Search by name or description
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Sorting
    const sortOptions: any = {};
    sortOptions[sortBy as string] = sortOrder === 'desc' ? -1 : 1;

    // Pagination
    const skip = (Number(page) - 1) * Number(limit);

    const cars = await Car.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(Number(limit));

    const total = await Car.countDocuments(query);

    res.json({
      success: true,
      data: cars,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch cars'
    });
  }
};

// Get single car by ID
export const getCarById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const car = await Car.findOne({ id });

    if (!car) {
      return res.status(404).json({
        success: false,
        error: 'Car not found'
      });
    }

    res.json({
      success: true,
      data: car
    });
  } catch (error) {
    console.error('Error fetching car:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch car'
    });
  }
};

// Get cars by category
export const getCarsByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const { limit = 10 } = req.query;

    const cars = await Car.find({
      category,
      isAvailable: true
    })
      .sort({ rating: -1 })
      .limit(Number(limit));

    res.json({
      success: true,
      data: cars
    });
  } catch (error) {
    console.error('Error fetching cars by category:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch cars by category'
    });
  }
};

// Get featured cars (high rating, available)
export const getFeaturedCars = async (req: Request, res: Response) => {
  try {
    const { limit = 6 } = req.query;

    const cars = await Car.find({
      isAvailable: true,
      rating: { $gte: 4.5 }
    })
      .sort({ rating: -1 })
      .limit(Number(limit));

    res.json({
      success: true,
      data: cars
    });
  } catch (error) {
    console.error('Error fetching featured cars:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch featured cars'
    });
  }
};

// Get car categories with counts
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Car.aggregate([
      { $match: { isAvailable: true } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json({
      success: true,
      data: categories.map(cat => ({
        name: cat._id,
        count: cat.count
      }))
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories'
    });
  }
};

// Get price range statistics
export const getPriceRange = async (req: Request, res: Response) => {
  try {
    const stats = await Car.aggregate([
      { $match: { isAvailable: true } },
      {
        $group: {
          _id: null,
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
          avgPrice: { $avg: '$price' }
        }
      }
    ]);

    if (stats.length === 0) {
      return res.json({
        success: true,
        data: { minPrice: 0, maxPrice: 0, avgPrice: 0 }
      });
    }

    res.json({
      success: true,
      data: stats[0]
    });
  } catch (error) {
    console.error('Error fetching price range:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch price range'
    });
  }
};

// Delete a car
export const deleteCar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedCar = await Car.findOneAndDelete({ id });

    if (!deletedCar) {
      return res.status(404).json({
        success: false,
        error: 'Car not found'
      });
    }

    res.json({
      success: true,
      message: 'Car deleted successfully',
      data: deletedCar
    });
  } catch (error) {
    console.error('Error deleting car:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete car'
    });
  }
};

// Update car availability
export const updateCar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedCar = await Car.findOneAndUpdate(
      { id },
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedCar) {
      return res.status(404).json({
        success: false,
        error: 'Car not found'
      });
    }

    res.json({
      success: true,
      message: 'Car updated successfully',
      data: updatedCar
    });
  } catch (error) {
    console.error('Error updating car:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update car'
    });
  }
};
