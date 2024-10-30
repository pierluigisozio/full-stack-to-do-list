import { Router } from 'express';
import Task from '../models/Task';

const router = Router();


// Ottieni tutti i task
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        if(tasks){
            res.status(200).json(tasks);
        } else {
            res.status(200).json([]);
        }
    } catch (e : any) {
        res.status(500).json({message: e.message})
    }

});

// Crea un nuovo task
router.post('/tasks', async (req, res) => {
    const { title } = req.body;
    const task = new Task({ title });
    try {
        const newTask = await task.save();
        res.status(201).json(newTask); // Invia la risposta solo una volta
    } catch (e : any){
        res.status(400).json({message: e.message}); // Invia la risposta solo in caso di errore
    }
});

// Aggiorna un task esistente
// PUT /api/tasks/:id - Aggiorna un task esistente
router.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    Task.findByIdAndUpdate(id, { title, completed }, { new: true })
        .then((task) => {
            if (!task) {
                return res.status(404).json({ message: 'Task non trovato' });
            }
            return res.json(task);
        })
        .catch((e: any) => {
            res.status(400).json({ message: e.message });
        });
});

// Elimina un task esistente
router.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    try {
        const task = Task.findByIdAndDelete(id).then((task) => {
            if (!task) {
                return res.status(404).json({ message: 'Task non trovato' });
            }
            res.status(204).end();
        });
    } catch (e: any) {
        res.status(400).json({ message: e.message });
    }
});

export default router;
