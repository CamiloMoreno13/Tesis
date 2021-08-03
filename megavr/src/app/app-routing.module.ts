import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { ProductoComponent } from './producto/producto.component';
import { SpaceComponent } from './space/space.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [{ path: 'space', component: SpaceComponent },
{ path: 'inicio', component: InicioComponent },
{ path: '', redirectTo: '/inicio', pathMatch: 'full' }, 
{ path: 'perfiles/:id', component: PerfilesComponent },
{ path: 'noticias', component: NoticiasComponent },  
{ path: 'producto', component: ProductoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
