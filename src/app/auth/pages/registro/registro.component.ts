import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../../../shared/validators/validator.service";
import {EmailValidatorService} from "../../../shared/validators/email-validator.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'Email es obligatorio';
    }
    if (errors?.['pattern']) {
      return 'Formato inválido';
    }
    if (errors?.['emailTomado']) {
      return 'El email ya fue tomado, ingrese uno diferente';
    }
    return '';
  }

  myForm: FormGroup = this._fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreapellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailAsyncValidator]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6) ]],
    password2: ['', [Validators.required]]
  }, {
    validators: [this.vs.camposIguales('password', 'password2')]
  })

  constructor(private _fb: FormBuilder,
              private vs: ValidatorService,
              private emailAsyncValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      nombre: 'Samuel Larico',
      email: 'test1@test.com',
      username: 'slarico94',
      password: '123456',
      password2: '123456',
    })
  }

  campoInvalido(field: string) {
    return this.myForm.get(field)?.invalid
          && this.myForm.get(field)?.touched;
  }

  submit() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
