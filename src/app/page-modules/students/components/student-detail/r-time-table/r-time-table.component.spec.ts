import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RTimeTableComponent } from './r-time-table.component';

describe('RTimeTableComponent', () => {
  let component: RTimeTableComponent;
  let fixture: ComponentFixture<RTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
