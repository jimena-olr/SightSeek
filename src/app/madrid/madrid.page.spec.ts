import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MadridPage } from './madrid.page';

describe('MadridPage', () => {
  let component: MadridPage;
  let fixture: ComponentFixture<MadridPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MadridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
