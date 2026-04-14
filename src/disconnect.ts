import './connect.ts'; //makes sure, you connect to the database
import mongoose from 'mongoose';

async function disconnet() {
  await mongoose.disconnect();
}

export default disconnet();
