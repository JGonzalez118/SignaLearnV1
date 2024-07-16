import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VocalesP1Page } from './vocales-p1.page';

describe('VocalesP1Page', () => {
  let component: VocalesP1Page;
  let fixture: ComponentFixture<VocalesP1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VocalesP1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
