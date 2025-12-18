import { Router } from 'express';
import {
  createCar,
  getCars,
  getCarById,
  getCarsByCategory,
  getFeaturedCars,
  getCategories,
  getPriceRange,
  deleteCar,
  updateCar
} from '../controllers/carController';

const router = Router();

// POST /api/cars - Create a new car (for seeding/admin)
router.post('/', createCar);

// GET /api/cars - Get all cars with optional filtering, sorting, pagination
router.get('/', getCars);

// GET /api/cars/featured - Get featured cars (high rating)
router.get('/featured', getFeaturedCars);

// GET /api/cars/categories - Get available categories with counts
router.get('/categories', getCategories);

// GET /api/cars/price-range - Get price range statistics
router.get('/price-range', getPriceRange);

// GET /api/cars/category/:category - Get cars by category
router.get('/category/:category', getCarsByCategory);

// GET /api/cars/:id - Get single car by ID
router.get('/:id', getCarById);

// PATCH /api/cars/:id - Update car (for admin panel)
router.patch('/:id', updateCar);

// DELETE /api/cars/:id - Delete car (for admin panel)
router.delete('/:id', deleteCar);

export default router;
