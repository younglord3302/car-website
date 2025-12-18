import mongoose from 'mongoose';
import User from '../models/User';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const adminUsers = [
  {
    username: 'admin',
    email: 'admin@bmw.com',
    password: 'admin123',
    role: 'admin' as const,
    isActive: true
  }
];

const seedUsers = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bmw-cars';
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    // Clear existing admin users (optional - comment out if you want to keep existing users)
    // await User.deleteMany({ role: 'admin' });
    // console.log('Cleared existing admin users');

    for (const userData of adminUsers) {
      // Check if user already exists
      const existingUser = await User.findOne({ email: userData.email });

      if (!existingUser) {
        const user = new User(userData);
        await user.save();
        console.log(`Created admin user: ${userData.email}`);
      } else {
        console.log(`Admin user already exists: ${userData.email}`);
      }
    }

    console.log('User seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

// Run seeder if called directly
if (require.main === module) {
  seedUsers();
}

export default seedUsers;
