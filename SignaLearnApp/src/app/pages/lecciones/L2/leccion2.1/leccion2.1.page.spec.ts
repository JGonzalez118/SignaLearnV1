import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leccion21Page } from './leccion2.1.page';

describe('Leccion21Page', () => {
  let component: Leccion21Page;
  let fixture: ComponentFixture<Leccion21Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Leccion21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
