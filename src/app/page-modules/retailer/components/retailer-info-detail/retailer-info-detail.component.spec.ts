import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerInfoDetailComponent } from './retailer-info-detail.component';

describe('RetailerInfoDetailComponent', () => {
  let component: RetailerInfoDetailComponent;
  let fixture: ComponentFixture<RetailerInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
