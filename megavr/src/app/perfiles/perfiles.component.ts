import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  public parametro: string | null = "";
  constructor(private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.parametro = this.routes.snapshot.paramMap.get('id');
    console.log(this.parametro);
  }


}
