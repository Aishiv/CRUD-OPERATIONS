import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/crud/Employee';
import { CrudOperationsService } from 'src/app/shared/services/crud/crud-operations.service';
import { Router } from '@angular/router';
import { Notification } from 'src/app/shared/utils/notification-utility/notification';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.css']
})
export class CrudOperationsComponent implements OnInit {

  constructor(private crudOperationsService:CrudOperationsService,
              private router : Router,
              private notification : Notification) { }

  employeeList : Employee[];
  employee : Employee;

  saveBtn : boolean;
  ngOnInit() {
    this.saveBtn = false;
    this.showData();
  }

  onAddNewEmployee()
  {
    this.saveBtn = true;
   // this.router.navigate(['addnewemployee']);
   this.employeeList.push(new Employee());

  }
  onSaveClick()
  {
    this.employeeList.forEach(ele=>{
        if(!ele.empId)
        {
          console.log("Inserted new employee");
          this.employee = this.employeeList.pop();
          console.log("this.employee:--",this.employee);
        }
    });
    this.crudOperationsService.insertEmpDetails(this.employee).subscribe((res) =>{
      this.showData();
      this.notification.showSuccess("Record Saved Scuccessfully");
    });
  }

  onDeleteClick(emp:Employee)
  {
    if(emp.empId)
    {
      console.log("In delete CLick:--",emp);
      this.crudOperationsService.deleteById(emp.empId).subscribe((res)=>{
        this.showData();
        this.notification.showSuccess("Record Deleted Scuccessfully");
      });
    }
    else
    {
       this.employeeList.pop();
       this.notification.showSuccess("Record Canceled Scuccessfully");
    }   
  }
  
  showData()
  {
    this.saveBtn = false;
    this.crudOperationsService.getData().subscribe((res) =>{
      this.employeeList = res;
      console.log("employeeList:--",this.employeeList);
    });
  }
}
