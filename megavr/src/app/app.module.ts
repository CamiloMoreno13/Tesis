import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
//Servicios
import { CargarScriptsService } from "../app/Services/Carga/cargar-scripts.service";
//Componentes
import { AppComponent } from './app.component';
import { SpaceComponent } from './space/space.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { ProductoComponent } from './producto/producto.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { SpaceAdminComponent } from './administracion/space-admin/space-admin.component';
import { PerfilAdminComponent } from './administracion/perfil-admin/perfil-admin.component';
import { NoticiaAdminComponent } from './administracion/noticia-admin/noticia-admin.component';
import { ProductoAdminComponent } from './administracion/producto-admin/producto-admin.component';
import { OnboardingAdminComponent } from './administracion/onboarding-admin/onboarding-admin.component'
//Firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { PantallaCargaComponent } from './pantalla-carga/pantalla-carga.component';
import { PruebasComponent } from './pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponent,
    InicioComponent,
    MenuComponent,
    PerfilesComponent,
    ProductoComponent,
    NoticiasComponent,
    AdministracionComponent,
    SpaceAdminComponent,
    PerfilAdminComponent,
    NoticiaAdminComponent,
    ProductoAdminComponent,
    OnboardingAdminComponent,
    PantallaCargaComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, //Realtime
    AngularFirestoreModule, //Firestore
    AngularFireStorageModule, //Storage
    AngularFireAuthModule,
    FormsModule

  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
