import { Employee } from '../interfaces/employee';
import mockEmployees from '../data/mockEmployees';

let employees: Employee[] = [...mockEmployees];
let nextId = employees.length + 1;

export const getAllEmployees = (): Employee[] => {
  return employees;
};

export const getEmployeeById = (id: number): Employee | undefined => {
  return employees.find(e => e.id === id);
};

export const createEmployee = (name: string, position: string): Employee => {
  const newEmployee: Employee = { id: nextId++, name, position };
  employees.push(newEmployee);
  return newEmployee;
};

export const updateEmployee = (id: number, name?: string, position?: string): Employee | null => {
  const employee = employees.find(e => e.id === id);
  if (!employee) return null;

  if (name) employee.name = name;
  if (position) employee.position = position;

  return employee;
};

export const deleteEmployee = (id: number): boolean => {
  const index = employees.findIndex(e => e.id === id);
  if (index === -1) return false;

  employees.splice(index, 1);
  return true;
};
