import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandymanDetailPage } from './handyman-detail.page';

describe('HandymanDetailPage', () => {
  let component: HandymanDetailPage;
  let fixture: ComponentFixture<HandymanDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HandymanDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
