import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  reactiveForm: FormGroup = this._fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,

  }

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm.patchValue({
      genero: this.persona.genero,
      notificaciones: this.persona.notificaciones
    })
    this.reactiveForm.valueChanges.subscribe(({condiciones, ...rest}) => {
      this.persona = rest;
    })
  }

  submit() {
    const formValue = {...this.reactiveForm.value};
    delete formValue.condiciones;
    this.persona = formValue;
  }

}
