import { Component,OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  loginObj: any={
    username: '',
    password: ''
  };
  router: any;
  signupUsers: any;
  
  connstructor(){}
  ngOnInit(): void {
    const localData =localStorage.getItem('signupusers');
    if(localData != null){
      this.signupUsers =JSON.parse(localData);
        }
    }
onSignIn(){
   
  const isUserExist = this.signupUsers.find((m: { email: any; password: any; })=>m.email ==this.loginObj.email && m.password ==this.loginObj.password); 
 if(isUserExist != undefined) 
 {
  this.router.navigate('course')
  alert('user login succesfully');
 }
 else{
  alert('wrong credentials');
 }
}
guest(){
  this.router.navigate('course')
  alert('you are in guest mode')
}
signup()
{
  this.router.navigate('register')
}

}
