import { NgForm } from '@angular/forms';
import { Employee } from './../models/employee.model';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[]
  closeResult: string

  id: number
  header: string
  constructor(private employeeServices: EmployeeService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.employees = this.employeeServices.onGet()

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    let employee: Employee = {
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone
    }
    this.employeeServices.onAdd(employee)
  }

  // for delete
  onDelete(id: Number) {
    this.employeeServices.onDelete(id)
  }
  // for modal
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
