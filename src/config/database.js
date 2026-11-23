
import mongoose from 'mongoose';
import config from '../../config/index.js';

export async function connectDatabase() {
  try {
    await mongoose.connect(config.database);
    console.log(`MongoDB connected to ${config.environment}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    throw error;
  }
}
