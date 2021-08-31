import { Injectable } from '@angular/core';
import { RealService } from '../Firebase/realtime/real.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private real: RealService) { }
}
