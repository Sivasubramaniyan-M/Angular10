import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupUsers: any[] =[];
  signupObj: any={
    username: "",
    email: "",
    password: ""
  };
   connstructor(){}
  ngOnInit(): void {
    
    }
onSignUp(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
}
  

}


