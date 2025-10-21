import { Schema, model } from 'mongoose';

interface IMember {
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'manager' | 'member' | 'viewer';
  teamId: string;
  department: string;
  isActive: boolean;
  joinedAt: Date;
}

const memberSchema = new Schema<IMember>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  role: { type: String, enum: ['admin', 'manager', 'member', 'viewer'], default: 'member' },
  teamId: { type: String, required: true },
  department: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  joinedAt: { type: Date, default: Date.now },
});

export default model<IMember>('Member', memberSchema);