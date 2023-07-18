import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/correspondencia/inicio/inicio.component';
import { MostrarComponent } from './componentes/correspondencia/libro/mostrar/mostrar.component';

const routes: Routes = [
{path:'',redirectTo:'/inicio',pathMatch:'full'},
{path:'inicio',component:InicioComponent},
{path:'libros',component:MostrarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
