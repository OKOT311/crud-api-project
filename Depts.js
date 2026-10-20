import {query} from "../utils/connectToDB.js";
import { v4 as uuidv4 } from 'uuid';
let Depts = [];
export async function createdept (req, res){
const dept = req.body;
 Depts.push({ ...dept, id: uuidv4() });
  res.send(`Dept with the name ${dept.DepartmentName} added to the database!`);
}

export async function getdepts  (req, res) {
  res.send(Depts);
}

export async function getdept (req, res) {
 const { id } = req.params;
 const foundDept = Depts.find((dept) => dept.id === id);
  res.send(foundDept);
}

export async function deletedept  (req, res) {
  const { id } = req.params;
  Depts = Depts.filter((dept) => dept.id !== id);
  res.send(`Dept with id ${id} deleted successfully`);
}

export async function updatedept  (req, res) {
  const { id } = req.params;
  const dept = Depts.find((dept)=>dept.id === id);
  const { DepartmentName, Description } = req.body;
  if(DepartmentName) dept.DepartmentName = DepartmentName;
  if(Description) dept.Description = Description;
  res.send(`Dept with id ${id} updated successfully`);
}