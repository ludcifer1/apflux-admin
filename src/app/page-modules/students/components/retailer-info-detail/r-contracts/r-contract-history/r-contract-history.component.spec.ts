import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RContractHistoryComponent } from './r-contract-history.component';

describe('RContractHistoryComponent', () => {
  let component: RContractHistoryComponent;
  let fixture: ComponentFixture<RContractHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RContractHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RContractHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
