import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductvrComponent } from './productvr.component';

describe('ProductvrComponent', () => {
  let component: ProductvrComponent;
  let fixture: ComponentFixture<ProductvrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductvrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
