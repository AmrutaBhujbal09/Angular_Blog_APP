import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  RegisterPayload } from '../auth/Register-Payload';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LocalStorageService } from 'ngx-webstorage';



@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  updateprofileForm:FormGroup;
  updatePayload:RegisterPayload;


  id:number;

  constructor(private localStorage:LocalStorageService,private formBuilder:FormBuilder,private authService:AuthService) { 
    
    this.updatePayload = {
      email:'',
      password:'',
      first_name:'',
      last_name:'',
      contact_number:'',
      linkedin_url:'',
      Status_Choice:'ACTIVE',
      username:'',
      description:'',
    }
  }

    
  ngOnInit(): void {
    let localData = this.localStorage.retrieve('loginData');
    this.id = localData.id;
    
    
    this.updateprofileForm=this.formBuilder.group({
      fname:['localData.last_name',[Validators.required]],
      lname:['localData.first_name',[Validators.required]],
      cell:['localData.contact_number',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      bio:['localData.description'],
      linkedin:['localData.linkedin_url'],
      username:['localData.username',[Validators.required]],
      email:['localData.email',[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],

  
    });
  }

  onSubmit() {
    this.updatePayload.email = this.updateprofileForm.get('email').value;
    this.updatePayload.first_name = this.updateprofileForm.get('first_name').value;
    this.updatePayload.last_name = this.updateprofileForm.get('last_name').value;
    this.updatePayload.contact_number = this.updateprofileForm.get('contact_number').value;
    this.updatePayload.description = this.updateprofileForm.get('description').value;
    this.updatePayload.username = this.updateprofileForm.get('username').value;
    this.updatePayload.linkedin_url = this.updateprofileForm.get('linkedin_url').value;
    this.updatePayload.description = this.updateprofileForm.get('description').value;



    this.authService.updateProfile(this.updatePayload,this.id).subscribe(data => {
      alert("User updated successfully")
      console.log("welcome");
    } , error =>{
      alert('an error occurred');
    });
  }

 
} 
