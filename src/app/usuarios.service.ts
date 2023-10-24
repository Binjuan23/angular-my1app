import { Injectable } from '@angular/core';
import { Usuarios } from './interfaces/usuarios.interface';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuarios[];
  token: string = "";
  constructor(private cookies: CookieService, private router: Router) {

    this.usuarios = [
      { email: "prueba@prueba.com", password: "password" }, { email: "prueba1@prueba.com", password: "password1" }, { email: "prueba2@prueba.com", password: "password2" }, { email: "prueba3@prueba.com", password: "password3" }
    ]
  }

  comprobarUsuario(usuario: Usuarios): Boolean {
    const result = this.usuarios.filter(user => user.email === usuario.email);
    const esValido = result.length === 0 ? false : true;
    if (esValido) {
      this.token = Math.floor(Math.random() * 50) + "aawwsx";
      this.cookies.set("token", this.token);
    }
    return esValido;
  }

  getToken(): string {
    return this.cookies.get("token");
  }

  logout() {
    this.cookies.set("token", this.token = "");
    this.router.navigate(["/"]);
    window.location.reload();
  }
}


