import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RContractsComponent } from './r-contracts.component';

describe('RContractsComponent', () => {
  let component: RContractsComponent;
  let fixture: ComponentFixture<RContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
