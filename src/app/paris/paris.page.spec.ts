import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParisPage } from './paris.page';

describe('ParisPage', () => {
  let component: ParisPage;
  let fixture: ComponentFixture<ParisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
