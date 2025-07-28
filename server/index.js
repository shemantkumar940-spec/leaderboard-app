import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import claimRoutes from './routes/claimRoutes.js';
import historyRoutes from './routes/historyRoutes.js';
import User from './models/User.js'; // Import model here

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://testuser:aZZPiTyVJIRDSl9s@cluster0.aur66fk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Optional health check with native MongoClient
import { MongoClient, ServerApiVersion } from 'mongodb';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function runMongoHealthCheck() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. MongoDB is reachable.');
  } catch (err) {
    console.error('MongoDB health check failed:', err);
  } finally {
    await client.close();
  }
}
runMongoHealthCheck().catch(console.dir);

// Mongoose connect and then start server
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB with Mongoose!');

    // Routes
    app.get('/init-users', async (req, res) => {
      const names = ['Rahul', 'Kamal', 'Sanak', 'Amit', 'Priya', 'Neha', 'Vikas', 'Rohit', 'Simran', 'Ankit'];
      for (const name of names) {
        await User.updateOne({ name }, { $setOnInsert: { name } }, { upsert: true });
      }
      res.json({ message: 'Users initialized' });
    });

    app.use('/users', userRoutes);
    app.use('/claim', claimRoutes);
    app.use('/history', historyRoutes);

    const PORT = 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Mongoose connection error:', err);
    process.exit(1);
  });
