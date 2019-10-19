import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerContractComponent } from './retailer-contract.component';

describe('RetailerContractComponent', () => {
  let component: RetailerContractComponent;
  let fixture: ComponentFixture<RetailerContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
