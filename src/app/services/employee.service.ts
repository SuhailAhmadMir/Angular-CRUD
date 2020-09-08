import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: "Suhail Mir",
      email: 'mir.suhail@gmail.com',
      phone: 1111111111
    },
    {
      id: 2,
      name: "Jhon Doe",
      email: 'Jhon@gmail.com',
      phone: 2222222222
    }
  ]
  constructor() { }

  onGet() {
    return this.employees
  }

  onAdd(employee: Employee) {
    this.employees.push(employee)
  }

  onDelete(id: Number) {
    let employee = this.employees.find(x => x.id === id)
    let index = this.employees.indexOf(employee, 0)
    this.employees.splice(index, 1)
  }
}
