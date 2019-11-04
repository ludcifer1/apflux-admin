import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentStoreService } from '@app/root-store/store-services-manager/retailer-info.store.service';
import { ToastrService } from 'ngx-toastr';
import { SwalPartialTargets } from '@sweetalert2/ngx-sweetalert2';
import { FORM } from '@app/shared/constants/form.constant';
import { BsModalRef } from 'ngx-bootstrap';
import { Student } from '@app/shared/models/student.model';
import { StudentService } from '@app/core/services/student.service';

@Component({
	selector: 'kt-student-new',
	templateUrl: './student-new.component.html',
	styleUrls: ['./student-new.component.scss']
})
export class StudentNewComponent implements OnInit {
	@Output() result = new EventEmitter<any>();
	studentForm: FormGroup;
	majors: any[] = [];
	genders: any[] = [];
	specis: any[] = [];
	status: any[] = [];
	class: any[] = [];

	constructor(
		private fb: FormBuilder,
		private bsModalRef: BsModalRef,
		private studentStoreService: StudentStoreService,
		private studentService: StudentService,
		private toast: ToastrService
	) {}

	ngOnInit() {
		this.studentForm = this.createFormGroup();
		this.loadSpinnerData();
	}
	submit() {
		if (this.studentForm.valid) {
			const student = new Student(this.studentForm.value);
			student.setBirthDay(this.studentForm.value.birthday.toISOString());
			student.setStartDay(this.studentForm.value.start_date.toISOString());
			this.studentService.postStudent(student).subscribe(res => {
				if (res && res.result === 1) {
					this.toast.success('Thêm sinh viên thành công', 'Thông báo');
					this.result.next(res);
					this.bsModalRef.hide();
				} else {
					this.toast.error(res.message, 'Thông báo');
				}
			});
		}
	}

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
			{ id: 1, name: 'Công nghệ thông tin' },
			{ id: 2, name: 'Du lịch - Nhà hàng - Khách sạn' },
			{ id: 3, name: 'Thẩm mỹ - Làm đẹp' }
		];
		this.status = [{ id: 1, name: 'Học đi' }, { id: 2, name: 'Học lại' }];
		this.specis = [
			{ id: 1, name: 'Lập Trình Máy Tính/Thiết Bị Di Động' },
			{ id: 2, name: 'Thiết Kế Website' },
			{ id: 3, name: 'CNTT/ Ứng Dụng Phần Mềm' },
			{ id: 4, name: 'Thiết Kế Đồ Hoạ' },
			{ id: 5, name: 'Digital/ Online Marketing' },
			{ id: 6, name: 'Tổ Chức Sự Kiện' },
			{ id: 7, name: 'Marketing & Sales' },
			{ id: 8, name: 'Digital/ Online Marketing' }
		];
		this.class = [
			{ id: 1, name: 'PT13301' },
			{ id: 2, name: 'PT13302' },
			{ id: 3, name: 'PT13303' },
			{ id: 4, name: 'PT13304' },
			{ id: 5, name: 'PT13305' },
			{ id: 6, name: 'PT13306' },
			{ id: 7, name: 'PT13307' },
			{ id: 8, name: 'PT13308' }
		];
	}
}
