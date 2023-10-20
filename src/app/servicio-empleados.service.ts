import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  mostrarMensaje(msg: string){
    alert(msg);
  }
}
