import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leccion3Page } from './leccion3.page';

describe('Leccion3Page', () => {
  let component: Leccion3Page;
  let fixture: ComponentFixture<Leccion3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Leccion3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
