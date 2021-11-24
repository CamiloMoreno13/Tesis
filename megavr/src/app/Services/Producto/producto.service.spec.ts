import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { ProductoService } from './producto.service';

/*
describe('ProductoService', () => {
  let service: ProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [AngularFireModule.initializeApp(environment.firebaseConfig) , AngularFireDatabaseModule]});
    service = TestBed.inject(ProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
*/