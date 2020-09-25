import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidationService } from './confirm-password.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private customValidation:CustomValidationService) {
    this.registerForm=this.formBuilder.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      cell:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      bio:[''],
      email:['',[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:['',[Validators.required]],
      cpassword:['',[Validators.required]]
    },
       {
         validator:[this.customValidation.confirmedValidator('password','cpassword')]
       });
  }   
  ngOnInit(): void {
  }



}
