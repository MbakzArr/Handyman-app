import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NearbyHandymenPage } from './nearby-handymen.page';

describe('NearbyHandymenPage', () => {
  let component: NearbyHandymenPage;
  let fixture: ComponentFixture<NearbyHandymenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyHandymenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
