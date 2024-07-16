import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlimentosP1Page } from './alimentos-p1.page';

describe('AlimentosP1Page', () => {
  let component: AlimentosP1Page;
  let fixture: ComponentFixture<AlimentosP1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentosP1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
