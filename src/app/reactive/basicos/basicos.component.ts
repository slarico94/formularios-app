import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

/*
  reactiveForm: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(1500),
    existencias: new FormControl(5)
  });
*/

  reactiveForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [null, [Validators.required, Validators.min(0)]],
    existencias: [null, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm.setValue({
      nombre: 'RTX 4080ti',
      precio: 1600,
      existencias: 10
    })
  }

  campoEsInValido(field: string) {
    return this.reactiveForm.controls[field].errors && this.reactiveForm.controls[field].touched;
  }

  submit() {

    if (this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched()
      return;
    }
    console.log(this.reactiveForm.value)
    this.reactiveForm.reset();
  }

}
