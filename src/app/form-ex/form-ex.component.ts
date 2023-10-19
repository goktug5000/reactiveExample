import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-ex',
  templateUrl: './form-ex.component.html',
  styleUrls: ['./form-ex.component.css']
})
export class FormExComponent {
  name=new FormControl('nameEx');
  namee:string="a";
  
  desc=new FormControl('desc');
  imgUrl=new FormControl('imgUrl');
  price=new FormControl('price');


  setNamee(inputt:string){
    this.namee=inputt;
  }
}
