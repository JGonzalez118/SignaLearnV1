import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaAlimentosPage } from './prueba-alimentos.page';

describe('PruebaAlimentosPage', () => {
  let component: PruebaAlimentosPage;
  let fixture: ComponentFixture<PruebaAlimentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAlimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
