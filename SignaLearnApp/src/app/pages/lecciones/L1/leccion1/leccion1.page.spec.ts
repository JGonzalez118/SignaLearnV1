import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leccion1Page } from './leccion1.page';

describe('Leccion1Page', () => {
  let component: Leccion1Page;
  let fixture: ComponentFixture<Leccion1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Leccion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
