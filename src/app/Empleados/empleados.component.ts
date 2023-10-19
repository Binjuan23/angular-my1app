import { Component, OnInit } from "@angular/core";
import { Persona } from "../interfaces/persona.interface";

@Component({
    selector: 'app-empleados',
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {
    title: String = "Empleados de la empresa";    
    personas : Persona[]=[];
    condicion :boolean =true;
    constructor() {
     }

    ngOnInit(): void {        
    }

    recibirDatos(datos: any){
        console.log(datos);
        this.condicion=false;
        this.personas.push(datos);
        console.log(this.personas);
    }

}
