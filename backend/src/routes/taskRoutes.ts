import { Router } from 'express';
import Task from '../models/Task';

const router = Router();

// Crea un nuovo task
router.post('/tasks', async (req, res) => {
    const { title } = req.body;
    const task = new Task({ title });
    await task.save();
    res.status(201).json(task);
});

// Ottieni tutti i task
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Aggiorna un task
router.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const task = await Task.findByIdAndUpdate(id, { title, completed }, { new: true });
    res.json(task);
});

// Elimina un task
router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(204).end();
});

export default router;
