import mongoose from 'mongoose';
import { config } from './config';
console.log('src/setupDatabase.ts');
export default () => {
  const connect = async () => {
    try {
      await mongoose.connect(config.DATABASE_URL!);
      console.log('Success connect to database');
    } catch (error) {
      console.log('Fail to connect to database', error);
      return process.exit(1);
    }
  };
  connect();
  mongoose.connection.on('disconnected', connect);
};
