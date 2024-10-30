import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from "./routes/taskRoutes";
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Middleware per parsare JSON
app.use('/api', taskRoutes);



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todo_app', {})
    .then(r => console.log("MongooseDB connesso",r))
    .catch(error => console.log("Oh no!", error))

app.listen(PORT, () => console.log(`Server in ascolto su http://localhost:${PORT}`));

app.use('/api', taskRoutes);

