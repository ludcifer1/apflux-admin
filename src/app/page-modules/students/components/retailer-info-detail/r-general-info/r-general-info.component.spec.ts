import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RGeneralInfoComponent } from './r-general-info.component';

describe('RGeneralInfoComponent', () => {
	let component: RGeneralInfoComponent;
	let fixture: ComponentFixture<RGeneralInfoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RGeneralInfoComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RGeneralInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
