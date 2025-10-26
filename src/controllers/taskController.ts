import { Request, Response } from 'express';
import Task from '../models/Task';

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.json(tasks); // toJSON transform will handle id conversion
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(400).json({ 
      message: 'Invalid data', 
      error: error.message 
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    // Update the updatedAt field
    req.body.updatedAt = new Date();
    
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.json(updatedTask);
  } catch (error: any) {
    res.status(400).json({ 
      message: 'Invalid data', 
      error: error.message 
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};