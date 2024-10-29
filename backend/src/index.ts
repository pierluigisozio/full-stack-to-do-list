import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from "./routes/taskRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware per parsare JSON

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todo_app', {}).then(r => console.log(r));

app.listen(PORT, () => console.log(`Server in ascolto su http://localhost:${PORT}`));

app.use('/api', taskRoutes);

