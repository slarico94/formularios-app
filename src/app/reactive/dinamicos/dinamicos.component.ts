import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  reactiveForm: FormGroup = this._fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    favoritos: this._fb.array([
      ['Metalgear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this._fb.control('', Validators.required)

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return
    }
    this.favoritosArr.push(this._fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrarFavorito(idx: number) {
    this.favoritosArr.removeAt(idx);
  }

  submit() {
    if(this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched();
      return;
    }
    console.log(this.reactiveForm.value);
  }

  get favoritosArr(): FormArray {
    return this.reactiveForm.get('favoritos') as FormArray;
  }

  get f() {
    return this.reactiveForm.controls;
  }

}
