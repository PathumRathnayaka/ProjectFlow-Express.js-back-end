import { Request, Response } from 'express';
import Member from '../models/Member';

export const getAllMembers = async (req: Request, res: Response) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getMember = async (req: Request, res: Response) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createMember = async (req: Request, res: Response) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

export const updateMember = async (req: Request, res: Response) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMember) return res.status(404).json({ message: 'Member not found' });
    res.json(updatedMember);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

export const deleteMember = async (req: Request, res: Response) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);
    if (!deletedMember) return res.status(404).json({ message: 'Member not found' });
    res.json({ message: 'Member deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};