import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { NgForm } from '@angular/forms';
import { Usuarios } from '../interfaces/usuarios.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuariosService, private router: Router) { }

  usuario: Usuarios = { email: "", password: "" };
  valido: Boolean;

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form.valid) {
      this.usuario.email = form.value.email;
      this.usuario.password = form.value.password;
      this.comprobarUsuario();
    }

  }

  comprobarUsuario() {
    this.valido = this.usuarioService.comprobarUsuario(this.usuario);    
    if (this.valido) {
      this.router.navigate([""]);
    }
  }

}
