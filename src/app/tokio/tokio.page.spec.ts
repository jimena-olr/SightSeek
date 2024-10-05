import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TokioPage } from './tokio.page';

describe('TokioPage', () => {
  let component: TokioPage;
  let fixture: ComponentFixture<TokioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TokioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
