import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Jhon Harold', 'Hincapie'),
    new Persona('Jeimy', 'Rodriguez'),
  ];

  personaAgregada(persona: Persona) {
    this.personas.push(persona);
  }
}
