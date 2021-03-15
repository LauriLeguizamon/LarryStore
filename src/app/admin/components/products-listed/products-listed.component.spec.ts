import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListedComponent } from './products-listed.component';

describe('ProductsListedComponent', () => {
  let component: ProductsListedComponent;
  let fixture: ComponentFixture<ProductsListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
