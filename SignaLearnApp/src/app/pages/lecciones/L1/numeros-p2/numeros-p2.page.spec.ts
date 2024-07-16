import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumerosP2Page } from './numeros-p2.page';

describe('NumerosP2Page', () => {
  let component: NumerosP2Page;
  let fixture: ComponentFixture<NumerosP2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosP2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
