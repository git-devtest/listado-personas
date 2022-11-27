import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>()
  /* nombreInput: string = '';
  apellidoInput: string =''; */

  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  agregarPersona = () => {
    let persona1 = new Persona(
      this.nombre.nativeElement.value, 
      this.apellido.nativeElement.value
    );
    this.personaCreada.emit(persona1); 
  }
}
