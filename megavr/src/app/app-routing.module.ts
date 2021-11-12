import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { ProductoComponent } from './producto/producto.component';
import { SpaceComponent } from './space/space.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { OnboardingAdminComponent } from './administracion/onboarding-admin/onboarding-admin.component';
import { SpaceAdminComponent } from './administracion/space-admin/space-admin.component';
import { PerfilAdminComponent } from './administracion/perfil-admin/perfil-admin.component';
import { NoticiaAdminComponent } from './administracion/noticia-admin/noticia-admin.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'space', component: SpaceComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perfiles/:id', component: PerfilesComponent },
  { path: 'perfiles/:id_locutor/noticias/:id', component: NoticiasComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'onboarding-admin', component: OnboardingAdminComponent },
  { path: 'space-admin', component: SpaceAdminComponent },
  { path: 'perfil-admin', component: PerfilAdminComponent},
  { path: 'noticias-admin' , component: NoticiaAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
