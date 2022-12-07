import { Component } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private loggingService: LoggingService){}

  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Jhon Harold', 'Hincapie'),
    new Persona('Jeimy', 'Rodriguez'),
  ];

  personaAgregada(persona: Persona) {
    this.personas.push(persona);
    this.loggingService.enviaMensajeConsola('Hemos agregado a :'+persona._nombre+' al array de personas');
  }
}
