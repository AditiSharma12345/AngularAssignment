import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
})

export class InfoPageComponent {
  Firstname:string;
  RegisterForm: FormGroup;
  listData:any;
  constructor(private fb:FormBuilder)
  {

    this.listData = [];
    
    this.RegisterForm = this.fb.group(
      {
        Name:new FormControl('',[Validators.required]),
        collegeName:new FormControl(''),
        degree:new FormControl(''),
        specilization:new FormControl('')
      }
    )
  }
  get Name()
  {
    return this.RegisterForm.get('Name');
  }
  get collegeName()
  {
    return this.RegisterForm.get('collegeName');
  }
  get degree()
  {
    return this.RegisterForm.get('degree');
  }
  get specilization()
  {
    return this.RegisterForm.get('specilization');
  }
  RegisterUser()
  {}
  
  onsubmit()
  {
    console.log(this.RegisterForm);

    this.listData.push(this.RegisterForm.value);
    
  }

  oncancel()
  {
    this.RegisterForm.reset();
  }
}

