import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leccion11Page } from './leccion1.1.page';

describe('Leccion11Page', () => {
  let component: Leccion11Page;
  let fixture: ComponentFixture<Leccion11Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Leccion11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
