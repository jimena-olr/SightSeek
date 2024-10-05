import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LisbonPage } from './lisbon.page';

describe('LisbonPage', () => {
  let component: LisbonPage;
  let fixture: ComponentFixture<LisbonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LisbonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
