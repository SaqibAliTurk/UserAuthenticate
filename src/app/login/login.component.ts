import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormData!: FormGroup;

  constructor(private fb: FormBuilder, private userService:UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginFormData = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  onLoginButton(){
    this.userService.login(this.loginFormData.value).subscribe((res:any)=>{
      
      if(res){
        localStorage.setItem('auth-token',`${res.token}`)
        this.router.navigate(['home']);
        this.toastr.success('Successfully Login!');
      }
    },error=>{this.toastr.error(`${error.error}`)}
    );

  }

}
