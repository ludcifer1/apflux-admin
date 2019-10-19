import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RContractPaymentComponent } from './r-contract-payment.component';



describe('RContractPaymentComponent', () => {
  let component: RContractPaymentComponent;
  let fixture: ComponentFixture<RContractPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RContractPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RContractPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
