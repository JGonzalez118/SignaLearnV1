import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlimentosP2Page } from './alimentos-p2.page';

describe('AlimentosP2Page', () => {
  let component: AlimentosP2Page;
  let fixture: ComponentFixture<AlimentosP2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentosP2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
