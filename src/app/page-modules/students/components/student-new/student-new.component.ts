import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentStoreService } from '@app/root-store/store-services-manager/retailer-info.store.service';
import { ToastrService } from 'ngx-toastr';
import { SwalPartialTargets } from '@sweetalert2/ngx-sweetalert2';
import { FORM } from '@app/shared/constants/form.constant';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
	selector: 'kt-student-new',
	templateUrl: './student-new.component.html',
	styleUrls: ['./student-new.component.scss']
})
export class StudentNewComponent implements OnInit {
	studentForm: FormGroup;
	majors: any[] = [];
	genders: any[] = [];
	specis: any[] = [];
	status: any[] = [];

	constructor(
		private fb: FormBuilder,
		private bsModalRef: BsModalRef,
		private studentStoreService: StudentStoreService,
		private toast: ToastrService
	) {}

	ngOnInit() {
		this.studentForm = this.createFormGroup();
	}
	submit() {}

	closeDialog() {
		this.bsModalRef.hide();
	}

	private createFormGroup() {
		const formControls = FORM.STUDENT_FORM;
		const tempForm = this.fb.group(formControls);
		return tempForm;
	}

	private loadSpinnerData() {
		this.genders = [
			{ id: 1, name: 'Nam' },
			{ id: 2, name: 'Nữ' },
			{ id: 3, name: 'Khác' }
		];
		this.majors = [
			{ id: 1, name: 'Role 1' },
			{ id: 2, name: 'Role 2' },
			{ id: 3, name: 'Role 3' }
		];
		this.specis = [
			{ id: 1, name: 'Arthur da Joker' },
			{ id: 2, name: 'T.Wane da Polictician' },
			{ id: 3, name: 'B.Wane da Orphan' }
		];
	}
}
