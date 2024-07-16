import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColoresP1Page } from './colores-p1.page';

describe('ColoresP1Page', () => {
  let component: ColoresP1Page;
  let fixture: ComponentFixture<ColoresP1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoresP1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
