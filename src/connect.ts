import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
}

connect();
