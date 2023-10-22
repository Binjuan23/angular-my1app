import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

}
