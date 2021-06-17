import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login/login';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  passWord:string;
  invalidLoginMsg:boolean;
  empLoginDetails:Login[];
  employee : Login;
  constructor( private router: Router,
    private loginService:LoginService) { }

  ngOnInit() {
    this.invalidLoginMsg=false;

  }

  onSubmitClick()
{
  console.log("userName:---",this.userName);
  console.log("passWord:---",this.passWord);
  this.loginService.getLoginDetails(this.userName,this.passWord).subscribe(response=>{
    this.empLoginDetails=response;
    console.log("this.empLoginDetails",this.empLoginDetails)
     // console.log("loginId",this.empLoginDetails.id);
     // console.log("userName",this.empLoginDetails.userName);
     // console.log("passWord",this.empLoginDetails.passWord);
     // console.log("employeeDetails",this.empLoginDetails.employeeDetails);
      // console.log("employeeDetails empId",this.empLoginDetails.employeeDetails.empId);
      // console.log("employeeDetails empDept",this.empLoginDetails.employeeDetails.empDept);
      // console.log("employeeDetails empDesignation",this.empLoginDetails.employeeDetails.empDesignation);
      // console.log("employeeDetails empMail",this.empLoginDetails.employeeDetails.empMail);
      // console.log("employeeDetails location",this.empLoginDetails.employeeDetails.location);
      // console.log("employeeDetails reportingPerson",this.empLoginDetails.employeeDetails.reportingPerson);
      //this.employee = this.empLoginDetails.pop();
      if(this.empLoginDetails != null || this.empLoginDetails != undefined)
      {
      
        console.log("Response is not null");
        this.router.navigate(['/crud'], { skipLocationChange: true });
      }
      else{
        console.log("Response is null");
        this.invalidLoginMsg=true;
       }
    //   this.router.navigate(['/crud'], { skipLocationChange: true });
     //this.router.navigate(['/dashBoardPage'], { skipLocationChange: true });
  });
  // this.router.navigate(['/menuPage'], { skipLocationChange: true });
  //homePage leavePage menuPage attendencePage profilePage  profileDetailsPage
//aboutDetailsPage
}
onPasswordChangeClick()
{
  
}

}
