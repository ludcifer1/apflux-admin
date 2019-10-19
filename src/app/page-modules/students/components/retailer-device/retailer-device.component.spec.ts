import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerDeviceComponent } from './retailer-device.component';

describe('RetailerDeviceComponent', () => {
  let component: RetailerDeviceComponent;
  let fixture: ComponentFixture<RetailerDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
