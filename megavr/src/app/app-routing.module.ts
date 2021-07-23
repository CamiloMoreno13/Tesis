import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SpaceComponent } from './space/space.component';

const routes: Routes = [{path:'space',component:SpaceComponent},
{path:'inicio',component:InicioComponent},
{path:'', redirectTo:'/inicio', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
