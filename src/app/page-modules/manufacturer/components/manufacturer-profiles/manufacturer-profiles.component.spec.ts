import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerProfilesComponent } from './manufacturer-profiles.component';

describe('ManufacturerProfilesComponent', () => {
	let component: ManufacturerProfilesComponent;
	let fixture: ComponentFixture<ManufacturerProfilesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ManufacturerProfilesComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ManufacturerProfilesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
