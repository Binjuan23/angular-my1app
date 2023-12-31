import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './Empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { HomeCComponent } from './homeC/homeC.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnviandoDatosComponent } from './enviando-datos/enviando-datos.component';
import { DataServices } from './data.services';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { UsuariosService } from './usuarios.service';
import { CookieService } from 'ngx-cookie-service';

const appRoutes: Route[] =[
  {path:'', component:HomeCComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'quienes', component:QuienesComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'envio/:nombre', component:EnviandoDatosComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:ErrorComponent},

]

@NgModule({
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent, HomeCComponent, ProyectosComponent, QuienesComponent, ContactoComponent, EnviandoDatosComponent, LoginComponent, ErrorComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule, HttpClientModule
  ],
  providers: [ServicioEmpleadosService, DataServices, UsuariosService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
