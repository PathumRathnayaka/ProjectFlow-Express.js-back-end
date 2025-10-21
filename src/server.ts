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

app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON bodies
app.use(cors({ origin: 'http://localhost:5173' }));

// Connect to DB
connectDB();

// Routes
app.use('/api/v1/projectflow/project', projectRoutes);
app.use('/api/v1/projectflow/task', taskRoutes);
app.use('/api/v1/projectflow/team', teamRoutes);
app.use('/api/v1/projectflow/member', memberRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});