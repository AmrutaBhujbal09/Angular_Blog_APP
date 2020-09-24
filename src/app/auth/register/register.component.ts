import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.registerForm=this.formBuilder.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      cell:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      bio:[''],
      email:['',[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:['',[Validators.required]],
      cpassword:['',[Validators.required]]
    },
    /*{
      Validators:ConfirmedValidator('password','cpassword')
    }*/
    )}
  /*get f(){
  return this.form.controls;  
  }
  submit(){
    console.log(this.form.value);
  }
  */
  ngOnInit(): void {
  }
  /*
  export function ConfirmedValidator(controlName:string, matchingControlName:string){
    return (registerForm:FormGroup) => {
      const control=registerForm.controls[controlName];
      const matchingControl=registerForm.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.confirmedValidator)
      {

        return;

      }
      if(control.value!==matchingControl.value)
      {
        matchingControl.setErrors({confirmedValidator:true});
      }
      else
      {
        matchingControl.setErrors(null);

      }
    }
  }*/
}
