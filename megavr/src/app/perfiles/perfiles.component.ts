import { Route } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  public aviso : boolean=true;
  constructor(private renderer2: Renderer2, private routes: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.parametro = this.routes.snapshot.paramMap.get('id');
    console.log(this.parametro);
  }
  exit() {
    this.router.navigate(['/space']);
  }

  mute() {
    var b1 = this.videoi.nativeElement;
    if (this.videopls.nativeElement.muted) {

      this.videopls.nativeElement.muted = false;
      this.aviso=false;
    }
    else {
      this.videopls.nativeElement.muted = true;
      this.aviso=true;
    }
  }
}
