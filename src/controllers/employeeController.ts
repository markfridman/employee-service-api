import { Request, Response, NextFunction } from 'express';
import * as employeeService from '../services/employeeService';

export const getAllEmployees = (req: Request, res: Response, next: NextFunction) => {
  // TODO: for production add cursur or offset pagination
  try {
    const employees = employeeService.getAllEmployees();
    res.json(employees);
  } catch (error) {
    next(error);
  }
};

export const getEmployeeById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const employee = employeeService.getEmployeeById(parseInt(req.params.id));
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    next(error);
  }
};

export const createEmployee = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, position } = req.body;
    if (!name || !position) return res.status(400).json({ message: 'Name and position are required' });
    
    const newEmployee = employeeService.createEmployee(name, position);
    res.status(201).json(newEmployee);
  } catch (error) {
    next(error);
  }
};

export const updateEmployee = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, position } = req.body;
    const updatedEmployee = employeeService.updateEmployee(parseInt(req.params.id), name, position);
    if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.json(updatedEmployee);
  } catch (error) {
    next(error);
  }
};

export const deleteEmployee = (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleted = employeeService.deleteEmployee(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ message: 'Employee not found' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};