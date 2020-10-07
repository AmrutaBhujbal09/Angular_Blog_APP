import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidationService } from './confirm-password.service';
import {  RegisterPayload } from '../Register-Payload';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm:FormGroup;

  registerPayload:RegisterPayload;

  constructor(private formBuilder:FormBuilder,private customValidation:CustomValidationService,private authService:AuthService,private router:Router) {
    this.registerForm=this.formBuilder.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      cell:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      bio:[''],
      linkedin:'',
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:['',[Validators.required]],
      cpassword:['',[Validators.required]],
  
    },
       {
         validator:[this.customValidation.confirmedValidator('password','cpassword')]
       });

    
  this.registerPayload = {
    email:'',
    password:'',
    first_name:'',
    last_name:'',
    contact_number:'',
    linkedin_url:'',
    Status_Choice:'ACTIVE',
    username:'',
    description:''

    }     
  }   
  ngOnInit(): void {
  }


  //create onSubmit method  out of constructor() & assign fields values to registerpayload
  
  onSubmit() {

    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.first_name = this.registerForm.get('fname').value;
    this.registerPayload.last_name = this.registerForm.get('lname').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.contact_number = this.registerForm.get('cell').value;
    this.registerPayload.description = this.registerForm.get('bio').value;
    this.registerPayload.linkedin_url = this.registerForm.get('linkedin').value;
    this.registerPayload.username = this.registerForm.get('username').value;

    //console.log(this.registerPayload);

    //log() to print data on console
    this.authService.register(this.registerPayload).subscribe(data => {

      alert("welcome user  register successfully.now go to login page");
      console.log(data);
      this.router.navigateByUrl("/register-success");
    } , error => {
      alert('Unsuccessfull');
    });
  }


}
