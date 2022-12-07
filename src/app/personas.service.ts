import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona('Jhon Harold', 'Hincapie'),
        new Persona('Jeimy', 'Rodriguez'),
    ];

    constructor(private loggingService: LoggingService){}

    agregarPersona(persona: Persona) {
        this.loggingService.enviaMensajeConsola('Hemos agregado a :'+persona._nombre+' al array de personas');
        this.personas.push(persona);
    }
}