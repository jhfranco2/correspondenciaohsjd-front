import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { MenuComponent } from './componentes/correspondencia/menu/menu.component';
import { InicioComponent } from './componentes/correspondencia/inicio/inicio.component';
import { EditarComponent } from './componentes/correspondencia/libro/editar/editar.component';
import { CrearComponent } from './componentes/correspondencia/libro/crear/crear.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    EditarComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
