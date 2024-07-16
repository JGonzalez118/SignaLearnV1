import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PComunesPage } from './p-comunes.page';

describe('PComunesPage', () => {
  let component: PComunesPage;
  let fixture: ComponentFixture<PComunesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PComunesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
