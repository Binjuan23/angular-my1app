import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from '../interfaces/persona.interface';



@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Output() datosFormularioEnviados = new EventEmitter<any>();

  private persona: Persona = {
    name: "Juan",
    age: 37,
    organization: "Matínez SL"
  };
  condicion: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getName(): any {
    return this.persona.name;
  }
  getAge(): Number {
    return this.persona.age;
  }
  getOrganization(): String {
    return this.persona.organization;
  }

  setName(event: any): void {//(event: Event){(<HTMLInputElement>event.target).value }  
    this.persona.name = event;
  }

  setAge(event: any) {
    this.persona.age = event;
  }

  setOrganization(event: any) {
    this.persona.organization = event;
  }

  mostrar(formulario: NgForm) {
    this.condicion = !this.condicion;
    if (formulario.valid) {
      const datosForm = formulario.value;

      this.persona.name = datosForm.name;
      this.persona.age = datosForm.age;
      this.persona.organization = datosForm.organization;
      if (datosForm != null) {
        this.datosFormularioEnviados.emit({
          name: datosForm.name,
          age: datosForm.age,
          organization: datosForm.organization
        });
      }
      formulario.reset();
    }
  }
}
