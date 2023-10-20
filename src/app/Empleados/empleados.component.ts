import { Component, OnInit } from "@angular/core";
import { Persona } from "../interfaces/persona.interface";
import { ServicioEmpleadosService } from "../servicio-empleados.service";

@Component({
    selector: 'app-empleados',
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {
    title: String = "Empleados de la empresa";    
    personas : Persona[]=[];
    condicion :boolean =true;
    nombre :string="Juan Vicente Brotons"
    constructor(private servicio : ServicioEmpleadosService) {
     }

    ngOnInit(): void {        
    }

    recibirDatos(datos: any){
        console.log(datos);
        this.condicion=false;
        this.servicio.mostrarMensaje(`Estos son los datos que se insertarán en la lista: \n Nombre: ${datos.name}\n Edad: ${datos.age}\n Organización: ${datos.organization}`);
        this.personas.push(datos);
        console.log(this.personas);
    }

}
