import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosByCategoriaComponent } from './productos-by-categoria.component';

describe('ProductosByCategoriaComponent', () => {
  let component: ProductosByCategoriaComponent;
  let fixture: ComponentFixture<ProductosByCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosByCategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosByCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
