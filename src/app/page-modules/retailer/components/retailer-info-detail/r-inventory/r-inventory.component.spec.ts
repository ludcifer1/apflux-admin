import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RInventoryComponent } from './r-inventory.component';

describe('RInventoryComponent', () => {
  let component: RInventoryComponent;
  let fixture: ComponentFixture<RInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
