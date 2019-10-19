import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RSelloutComponent } from './r-sellout.component';

describe('RSelloutComponent', () => {
  let component: RSelloutComponent;
  let fixture: ComponentFixture<RSelloutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSelloutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RSelloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
