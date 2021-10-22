import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Noticia } from '../models/noticia';
import { FireService } from '../Services/Firebase/firestore/fire.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  public bola : boolean = false;
  public perfiles : boolean = false;
  public noticias : boolean = false;
  public producto : boolean = false;
  public inicio: boolean = false;
  public equis : boolean = true;

  public locutores : {menuName : string, nombre : string}[] = [] ; 
  public listNoticias : Noticia[] = [];
  public href: string = "";
  public href_noticia: string ="";

  constructor(private router:Router, private fire: FireService) {
  }

  @Input() set menus(tipo : any){
    if(tipo == 'space') {this.locutores =  this.fire.getLocutores(); this.inicio = true;}
    if(tipo == 'perfiles') { this.perfiles = true }
    if(tipo.tipo == 'noticias') { this.listNoticias = this.fire.getNoticias(tipo.locutor); this.noticias = true;}
  }

  ngOnInit(): void {
    this.href = this.router.url;
  }

  exit() {
    this.router.navigate(['/space']);
  }

  exitNoticias() {
    var splits = this.href.split('/noticias');
    this.router.navigate([splits[0]]);
  }

  pop() {
    if (!this.bola) {
      this.bola=true;
      this.equis=false;
    }
    else{
      this.bola=false;
      this.equis=true;
    }
  }
  
  start(){
    this.router.navigate(['/inicio']);
  }

  locutor(cadena:string){
    //console.log("entro locuro");
    var splits = this.href.split('/noticias');
    //console.log("splits" , splits[0]+'/noticias/'+cadena);
    this.router.navigate([splits[0]+'/noticias/',cadena]);
  }
}
