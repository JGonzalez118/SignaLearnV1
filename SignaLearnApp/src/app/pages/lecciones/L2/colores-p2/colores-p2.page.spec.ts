import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColoresP2Page } from './colores-p2.page';

describe('ColoresP2Page', () => {
  let component: ColoresP2Page;
  let fixture: ComponentFixture<ColoresP2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoresP2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
