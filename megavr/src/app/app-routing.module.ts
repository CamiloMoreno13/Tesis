import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { ProductoComponent } from './producto/producto.component';
import { SpaceComponent } from './space/space.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AdministracionComponent } from './administracion/administracion.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'space', component: SpaceComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perfiles/:id', component: PerfilesComponent },
  { path: 'perfiles/:id_locutor/noticias/:id', component: NoticiasComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'administrador' , component: AdministracionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
