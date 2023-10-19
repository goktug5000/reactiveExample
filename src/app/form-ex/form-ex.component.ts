import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-ex',
  templateUrl: './form-ex.component.html',
  styleUrls: ['./form-ex.component.css']
})
export class FormExComponent {

  productForm= new FormGroup({

    name:new FormControl('nameEx'),
    desc:new FormControl('desc'),
    imgUrl:new FormControl('imgUrl'),
    price:new FormControl('price')

  });
  namee:string="a";


  setNamee(inputt:string){
    this.namee=inputt;
  }
  onSubmit(){
    console.log(this.productForm.value);
  }
  update(){
    this.productForm.patchValue({
      name:'nameNew'
    });
  }
}
