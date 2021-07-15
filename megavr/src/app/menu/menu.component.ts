import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var nbOptions:number = 8;
    var angleStart:number = -360;

    function toggleOptions(s: any) {
      $(s).toggleClass('open');
      var li = $(s).find('li');
      var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
      for(var i=0; i<li.length; i++) {
        var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],-360);
      }
    }
  
     // jquery rotate animation
    function rotate(li: HTMLLIElement,d: number) {
      $({d:-360}).animate({d:d}, {
        step: function(now) {
          $(li)
          .css({ transform: 'rotate('+now+'deg)' })
          .find('label')
          .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
      });
    }

    const objeto:any = $('.selector');
    $('.selector button').click(function(){
      toggleOptions(objeto);
    });
  }

}
