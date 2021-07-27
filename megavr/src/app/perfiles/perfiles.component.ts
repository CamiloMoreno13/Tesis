import { Route } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit,Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  @ViewChild('videopls') videopls!: ElementRef;
  @ViewChild('videoi') videoi!: ElementRef;
  //volume : boolean = true;
  public parametro: string | null = "";
  constructor(private renderer2: Renderer2,private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.parametro = this.routes.snapshot.paramMap.get('id');
    console.log(this.parametro);
  }

  mute(){
    var b1 = this.videoi.nativeElement;
    if(this.videopls.nativeElement.muted){
      
      this.videopls.nativeElement.muted = false;
    }
    else{
      this.videopls.nativeElement.muted=true;
      this.videoi.nativeElement.class.setAttribute('class','fa fa-volume-mute');
    }
  }
}
