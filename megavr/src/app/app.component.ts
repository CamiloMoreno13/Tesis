import { Component} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
declare var gtag: (arg0: string, arg1: any, arg2: { page_path: string; }) => void; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'megavr';
  
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.firebaseConfig.measurementId, {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }
}
