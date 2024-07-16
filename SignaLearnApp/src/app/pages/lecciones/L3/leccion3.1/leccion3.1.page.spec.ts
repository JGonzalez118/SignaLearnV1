import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leccion31Page } from './leccion3.1.page';

describe('Leccion31Page', () => {
  let component: Leccion31Page;
  let fixture: ComponentFixture<Leccion31Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Leccion31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
