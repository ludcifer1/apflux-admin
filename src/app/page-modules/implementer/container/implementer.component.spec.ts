import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementerComponent } from './implementer.component';

describe('OperatorComponent', () => {
	let component: ImplementerComponent;
	let fixture: ComponentFixture<ImplementerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ImplementerComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImplementerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
