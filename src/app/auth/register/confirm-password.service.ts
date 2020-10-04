import { AbstractControl,FormGroup } from "@angular/forms";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CustomValidationService {
    constructor() { }

    confirmedValidator(controlName:string,matchingControlName: string){
        return(formGroup:FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if(matchingControl.errors && !matchingControl.errors.confirmedValidator){
                return;
            }

            if(control.value !==matchingControl.value){
                matchingControl.setErrors({mismatch:true});
            }
            
            else{
                matchingControl.setErrors(null);

            }
        }
      
    }
}