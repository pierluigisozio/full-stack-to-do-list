import mongoose, { Document } from 'mongoose';

interface ITask extends Document {
    title: string;
    completed: boolean;
    id?: string;
}

const taskSchema = new mongoose.Schema<ITask>({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
}); //ci vorrebbe anche un id

export default mongoose.model<ITask>('Task', taskSchema);