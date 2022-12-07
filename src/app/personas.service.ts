import { Persona } from "./persona.model";

export class PersonasService{
    personas: Persona[] = [
        new Persona('Jhon Harold', 'Hincapie'),
        new Persona('Jeimy', 'Rodriguez'),
    ];

    agregarPersona(persona: Persona) {
        this.personas.push(persona);
        //this.loggingService.enviaMensajeConsola('Hemos agregado a :'+persona._nombre+' al array de personas');
    }
}