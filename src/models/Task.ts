import { Schema, model } from 'mongoose';

interface ITask {
  title: string;
  description: string;
  status: 'new' | 'scheduled' | 'in-progress' | 'completed' | 'blocked';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  projectId: string;
  assigneeId: string;
  reporterId: string;
  dueDate: string;
  estimatedHours: number;
  actualHours: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['new', 'scheduled', 'in-progress', 'completed', 'blocked'], default: 'new' },
  priority: { type: String, enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' },
  projectId: { type: String, required: true },
  assigneeId: { type: String, required: true },
  reporterId: { type: String, required: true },
  dueDate: { type: String, required: true },
  estimatedHours: { type: Number, default: 0 },
  actualHours: { type: Number, default: 0 },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt
  toJSON: {
    virtuals: true,
    transform: function(_doc, ret) {
      (ret as any).id = ret._id.toString();
      delete (ret as any)._id;
      delete (ret as any).__v;
      return ret;
    }
  }
});

export default model<ITask>('Task', taskSchema);