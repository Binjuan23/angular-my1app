/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-myApp';
}*/
import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component2.html'
})
export class AppComponent {
  title = "angular-myApp";
  nombre: string = "Pepe el mejor"
  usuarioLog: Boolean = false;
  constructor(private usuarioService: UsuariosService) {

  }

  usuarioLogueado(): Boolean {
    if (this.usuarioService.getToken() !== "") {      
      this.usuarioLog = true;
    }
    return this.usuarioLog;
  }

  logout() {
    this.usuarioService.logout();
    this.usuarioLog = false;
  }

}
