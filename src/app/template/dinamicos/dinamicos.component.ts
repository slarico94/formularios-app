import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('dinamicForm') dinamicForm!: NgForm;
  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Samuelito',
    favoritos: [
      { id: 1, nombre: 'Arroz con heuvo' },
      { id: 2, nombre: 'Programar' },
      { id: 3, nombre: 'Hackear xD' },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('submmited')
  }

  eliminar(idx: number) {
    this.persona.favoritos.splice(idx, 1);
  }

  agregar() {
    this.persona.favoritos.push({
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    })
    this.nuevoJuego = '';
  }

  get precioRequerido(): boolean {
    return  this.dinamicForm?.controls['nombre']?.touched &&
            this.dinamicForm?.controls['nombre']?.errors?.['required'];
  }

}
