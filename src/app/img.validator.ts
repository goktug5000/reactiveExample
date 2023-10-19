import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ImageValidator{
    static isValidExtension(control:AbstractControl): ValidationErrors|null{
        const v = control.value as string;

        if(v.endsWith('.jpeg') || v.endsWith('.jpg') || v.endsWith('.png')){
            return null;
        }
        else{
            return{
                wrongExtension:true
            }
        }


    }
}