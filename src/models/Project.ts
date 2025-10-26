import { Schema, model } from 'mongoose';

interface IProject {
  name: string;
  description: string;
  status: 'active' | 'on-hold' | 'completed' | 'archived';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  startDate: string;
  dueDate: string;
  progress: number;
  teamId: string;
  ownerId: string;
  folderId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['active', 'on-hold', 'completed', 'archived'], default: 'active' },
  priority: { type: String, enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' },
  startDate: { type: String, required: true },
  dueDate: { type: String, required: true },
  progress: { type: Number, default: 0 },
  teamId: { type: String, required: true },
  ownerId: { type: String, required: true },
  folderId: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
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

export default model<IProject>('Project', projectSchema);