import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementerProfilesComponent } from './implementer-profiles.component';

describe('ImplementerProfilesComponent', () => {
  let component: ImplementerProfilesComponent;
  let fixture: ComponentFixture<ImplementerProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementerProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementerProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
