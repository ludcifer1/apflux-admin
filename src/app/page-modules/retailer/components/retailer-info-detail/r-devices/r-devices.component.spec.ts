import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RDevicesComponent } from './r-devices.component';

describe('RDevicesComponent', () => {
  let component: RDevicesComponent;
  let fixture: ComponentFixture<RDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
