import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from 'src/app/userservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
user:any

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(user:UserService) {
this.user=UserService;
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("form values",this.signInForm.value);
    this.user.getgetUserInfo(this.signInForm.value).subscribe((data:any)=>{
      console.log("signin data",data);
    });

  }
}
