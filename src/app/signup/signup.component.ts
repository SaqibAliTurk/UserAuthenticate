import { ToastrService } from 'ngx-toastr';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupFormData!: FormGroup;


  constructor(private fb: FormBuilder, private userService:UserService, private router: Router, private toast: ToastrService) {

   }

  ngOnInit(): void {
    this.signupFormData  = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSignupButton(){
    this.userService.signup(this.signupFormData.value).subscribe(res=>{
    this.router.navigate(['/home']);
    },error=>{this.toast.error(`${error.error}`)});
    this.signupFormData.reset();
  }

}
