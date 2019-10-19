import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerStorageComponent } from './retailer-storage.component';

describe('RetailerStorageComponent', () => {
  let component: RetailerStorageComponent;
  let fixture: ComponentFixture<RetailerStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
