import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private activatedRoute: ActivatedRoute,
    private router:Router){

}

loginForm = new FormGroup({
user:new FormControl('',[Validators.required,Validators.email]),
password:new FormControl('',[Validators.required,Validators.minLength(5)])
})

get user()
{
return this.loginForm.get('user');
}

get password()
{
return this.loginForm.get('password');
}
loginUser()
{
   this.loginForm.reset();
}

}
