import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashingtonPage } from './washington.page';

describe('WashingtonPage', () => {
  let component: WashingtonPage;
  let fixture: ComponentFixture<WashingtonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashingtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
