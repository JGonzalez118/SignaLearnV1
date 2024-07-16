import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumerosP1Page } from './numeros-p1.page';

describe('NumerosP1Page', () => {
  let component: NumerosP1Page;
  let fixture: ComponentFixture<NumerosP1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosP1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
