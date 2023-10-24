import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-enviando-datos',
  templateUrl: './enviando-datos.component.html',
  styleUrls: ['./enviando-datos.component.css']
})
export class EnviandoDatosComponent implements OnInit {

  nombre: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombre = this.router.snapshot.params['nombre'];
  }

  condicion: boolean = true;
  lista: Persona []= [{name:'Juan', age:22, organization:'Zapatos'},
  {name:"María", age:33, organization:"Restauración"},
  {name:"Pepe", age:55, organization:"Tecnología"},
  {name:"Luis", age:40, organization:"Restauración"},
  {name:"Estefanía", age:23, organization:"Sanidad"}];

  persona:Persona;

  
}
