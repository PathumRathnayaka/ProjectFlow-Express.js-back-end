import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import projectRoutes from './routes/projectRoutes';
import taskRoutes from './routes/taskRoutes';
import teamRoutes from './routes/teamRoutes';
import memberRoutes from './routes/memberRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-frontend-domain.vercel.app'], // Add your frontend URL
  credentials: true
}));
app.use(express.json());

// Connect to DB
connectDB();

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'ProjectFlow API is running!' });
});

// API Routes
app.use('/api/v1/projectflow/project', projectRoutes);
app.use('/api/v1/projectflow/task', taskRoutes);
app.use('/api/v1/projectflow/team', teamRoutes);
app.use('/api/v1/projectflow/member', memberRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Only start server if not in Vercel environment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel serverless
export default app;