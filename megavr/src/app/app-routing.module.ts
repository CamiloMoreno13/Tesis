import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceComponent } from './space/space.component';

const routes: Routes = [{path:'space',component:SpaceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
