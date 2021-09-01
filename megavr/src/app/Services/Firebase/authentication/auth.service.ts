import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  create(){
    console.log("entro")
    this.auth.createUserWithEmailAndPassword('camilo13@gmail.com',"123456789").then(res => {
      res.user?.uid;  
    }); 

    this.ingresar();
  }

  ingresar(){
    console.log("entro ingresar")
    this.auth.signInWithEmailAndPassword('camilo@gmail.com',"123456789").then(res => {
      console.log(res.user?.email, res.user?.uid, res.credential);
    });
  }
}
