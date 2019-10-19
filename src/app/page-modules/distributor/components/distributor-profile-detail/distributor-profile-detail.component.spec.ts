import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorProfileDetailComponent } from './distributor-profile-detail.component';

describe('DistributorProfileDetailComponent', () => {
  let component: DistributorProfileDetailComponent;
  let fixture: ComponentFixture<DistributorProfileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorProfileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
