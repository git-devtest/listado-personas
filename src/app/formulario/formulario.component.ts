import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  //@Output() personaCreada = new EventEmitter<Persona>()
  /* nombreInput: string = '';
  apellidoInput: string =''; */

  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ) {}

  agregarPersona = () => {
    let persona1 = new Persona(
      this.nombre.nativeElement.value, 
      this.apellido.nativeElement.value
    );
    this.loggingService.enviaMensajeConsola("Enviamos persona: "+ persona1._nombre +" "+ persona1._apellido);
    //this.personaCreada.emit(persona1); 
    this.personasService.agregarPersona(persona1);
  }
}
