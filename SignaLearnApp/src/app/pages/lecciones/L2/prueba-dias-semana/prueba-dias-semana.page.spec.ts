import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaDiasSemanaPage } from './prueba-dias-semana.page';

describe('PruebaDiasSemanaPage', () => {
  let component: PruebaDiasSemanaPage;
  let fixture: ComponentFixture<PruebaDiasSemanaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDiasSemanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
