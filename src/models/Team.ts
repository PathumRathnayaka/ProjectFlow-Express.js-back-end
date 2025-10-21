import { Schema, model } from 'mongoose';

interface ITeam {
  name: string;
  description: string;
  color: string;
  memberIds: string[];
  leaderId: string;
  createdAt: Date;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, default: '#3B82F6' },
  memberIds: { type: [String], default: [] },
  leaderId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<ITeam>('Team', teamSchema);