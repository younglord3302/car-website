const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// Import the Car model
const Car = require('./src/models/Car').default;

// Import the cars data
const cars = require('./src/seeders/carSeeder').cars;

async function seedDatabase() {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bmw-cars';
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    // Clear existing cars
    await mongoose.connection.db.dropCollection('cars').catch(() => {
      console.log('Cars collection did not exist, creating new one');
    });

    // Insert new cars
    const insertedCars = await mongoose.connection.db.collection('cars').insertMany(cars);
    console.log(`Successfully seeded ${insertedCars.insertedCount} cars`);

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding cars:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedDatabase();
