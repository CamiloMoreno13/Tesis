import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RealService } from '../Firebase/realtime/real.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  rootRef = this.real.database.ref('producto');

  constructor(private real: AngularFireDatabase) {
  }

  clic(objeto: string){
    this.rootRef.child(objeto).get().then(res => {
      this.rootRef.child(objeto).set(res.val()+1);
    });
  }
}
