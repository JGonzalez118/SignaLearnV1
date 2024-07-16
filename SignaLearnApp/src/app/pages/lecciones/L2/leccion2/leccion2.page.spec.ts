import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leccion2Page } from './leccion2.page';

describe('Leccion2Page', () => {
  let component: Leccion2Page;
  let fixture: ComponentFixture<Leccion2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Leccion2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
