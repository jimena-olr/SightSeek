import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RomePage } from './rome.page';

describe('RomePage', () => {
  let component: RomePage;
  let fixture: ComponentFixture<RomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
