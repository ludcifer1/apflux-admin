import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerProfileDetailComponent } from './manufacturer-profile-detail.component';

describe('ManufacturerProfileDetailComponent', () => {
  let component: ManufacturerProfileDetailComponent;
  let fixture: ComponentFixture<ManufacturerProfileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerProfileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
