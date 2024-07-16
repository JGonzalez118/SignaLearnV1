import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaPalabrasPage } from './prueba-palabras.page';

describe('PruebaPalabrasPage', () => {
  let component: PruebaPalabrasPage;
  let fixture: ComponentFixture<PruebaPalabrasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaPalabrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
