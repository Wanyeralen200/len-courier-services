// Database seed data for testing

const mongoose = require('mongoose');
const User = require('../models/User');

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});

    // Create test users
    const users = [
      {
        firstName: 'John',
        lastName: 'Customer',
        email: 'customer@test.com',
        phone: '+254712345678',
        password: 'password123',
        role: 'customer',
        isActive: true
      },
      {
        firstName: 'Mike',
        lastName: 'Rider',
        email: 'rider@test.com',
        phone: '+254787654321',
        password: 'password123',
        role: 'rider',
        isActive: true
      },
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@test.com',
        phone: '+254722222222',
        password: 'password123',
        role: 'admin',
        isActive: true
      }
    ];

    await User.insertMany(users);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

module.exports = seedDatabase;
