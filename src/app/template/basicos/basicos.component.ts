import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4040TI',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    this.miFormulario.resetForm(this.initForm);
  }

  get nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.touched &&
        this.miFormulario?.controls['producto']?.invalid;
  }

  get precioMin(): boolean {
    return this.miFormulario?.controls['precio']?.touched &&
      this.miFormulario?.controls['precio']?.errors?.['min'];
  }

  get precioRequerido(): boolean {
    return this.miFormulario?.controls['precio']?.touched &&
      this.miFormulario?.controls['precio']?.errors?.['required'];
  }

}
