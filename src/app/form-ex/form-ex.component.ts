import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-ex',
  templateUrl: './form-ex.component.html',
  styleUrls: ['./form-ex.component.css']
})
export class FormExComponent {

  productForm = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    desc: new FormControl('', Validators.required),
    imgUrl: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),

  });
  namee: string = "a";

  get name(){
    return this.productForm.get('name');
  }
  setNamee(inputt: string) {
    this.namee = inputt;
  }
  onSubmit() {
    console.log(this.productForm.value);
  }
  update() {
    this.productForm.patchValue({
      name: 'nameNew'
    });
  }
}
