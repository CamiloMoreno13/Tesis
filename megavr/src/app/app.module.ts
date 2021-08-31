import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Componentes
import { AppComponent } from './app.component';
import { SpaceComponent } from './space/space.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { ProductoComponent } from './producto/producto.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SharedComponent } from './shared/shared.component';
import { ProductvrComponent } from './productvr/productvr.component';

//Firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponent,
    InicioComponent,
    MenuComponent,
    PerfilesComponent,
    ProductoComponent,
    NoticiasComponent,
    SharedComponent,
    ProductvrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, //Realtime
    AngularFirestoreModule, //Firestore
    AngularFireStorageModule
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
