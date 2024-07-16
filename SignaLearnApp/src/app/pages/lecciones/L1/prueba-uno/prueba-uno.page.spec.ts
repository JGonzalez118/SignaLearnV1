import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaUnoPage } from './prueba-uno.page';

describe('PruebaUnoPage', () => {
  let component: PruebaUnoPage;
  let fixture: ComponentFixture<PruebaUnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
