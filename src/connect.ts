import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log('Connected to MongoDB! \n');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
}

connect();
