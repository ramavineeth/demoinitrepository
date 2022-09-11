import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from 'src/app/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any

  signUpForm = new FormGroup({
    userName:new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(user:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){
   console.log( this.signUpForm.value);
   this.user.signUpUser(this.signUpForm.value).subscribe((data:any)=>{
    console.log("signup data",data);
  });;
    }
}
