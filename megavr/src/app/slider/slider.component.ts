import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {Vista} from '../../app/slider/vista';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public vistas: Vista[] = [];
  constructor(private config:NgbCarouselConfig, private router:Router) {
    config.wrap = false;
   }

  ngOnInit(): void {

    
  }

  space(){
    this.router.navigate(['/space'])
  }





}
