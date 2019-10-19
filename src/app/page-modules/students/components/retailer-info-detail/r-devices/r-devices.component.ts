import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FORM } from '@app/shared/constants/form.constant';
import * as moment from 'moment';
import { FORMAT } from '@app/shared/constants';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap';

@Component({
	selector: 'r-devices',
	templateUrl: './r-devices.component.html',
	styleUrls: ['./r-devices.component.scss']
})
export class RDevicesComponent implements OnInit {
	deviceForm: FormGroup;
	devices: FormArray;
	data: any[];
	historyList: any[] = [];
	deviceStatus: any[] = [];
	modalRef: BsModalRef;
	modalConfig: ModalOptions;

	constructor(private _fb: FormBuilder, private modalService: BsModalService) {
		this.createDeviceFormArray();
		this.devices = this.deviceForm.get('devices') as FormArray;

		this.data = [
			{
				deviceId: 'POS001',
				deviceType: 'POS',
				deviceStatus: 'Đang sử dụng',
				deviceOnlineStatus: 'On'
			}
		];
		this.historyList = [
			{
				dateTime: '2019-02-19T11:14:19.08',
				description: 'Thêm thiết bị PC230',
				user: 'retailer01'
			},
			{
				dateTime: '2019-02-19T11:14:19.08',
				description: 'Thêm thiết bị PT120',
				user: 'retailer01'
			},
			{
				dateTime: '2019-02-19T11:14:19.08',
				description: 'Thêm thiết bị SC730',
				user: 'retailer01'
			},
			{
				dateTime: '2019-02-19T11:14:19.08',
				description: 'Thêm thiết bị SCN990',
				user: 'retailer01'
			}
		];

		this.deviceStatus = [
			{
				id: 1,
				name: 'Trong kho'
			},
			{
				id: 2,
				name: 'Đang bảo trì'
			},
			{
				id: 3,
				name: 'Hư hỏng'
			},
			{
				id: 4,
				name: 'Bị mất'
			}
		];
	}

	ngOnInit() {
		const i = this.data.length;

		for (let a = 0; a < i; a++) {
			this.pushDeviceToArray();
		}
		this.patchValuetoFormArray(this.data, this.devices);

		this.modalConfig = {
			backdrop: true,
			class: 'modal-md modal-dialog-centered modal-shadow'
		};
	}
	// ================================================
	// =                                              =
	// ================================================
	getItemStatusString(status: boolean): string {
		return status ? 'Online' : 'Offline';
	}

	getItemCssClassByType(status: boolean): string {
		return status ? 'success' : 'danger';
	}

	removeDevice(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template, this.modalConfig);
	}
	saveRemoveDevice() {
		this.modalRef.hide();
	}
	// ================================================
	// =                                              =
	// ================================================
	private createDeviceForm() {
		const formControls = FORM.DEVICE_FORM;
		return this._fb.group(formControls);
	}
	private patchValuetoFormArray(data: any | any[], formArray?: FormArray) {
		if (formArray && data) {
			formArray.controls.map((control, i) => {
				control.patchValue(data[i]);
				const deviceDate = moment
					.parseZone(data[i].deviceDate)
					.format('DD-MM-YYYY');

				control.patchValue({ deviceDate: deviceDate });
			});
		}
	}
	private createDeviceFormArray() {
		this.deviceForm = this._fb.group({
			devices: this._fb.array([])
		});
	}
	private pushDeviceToArray() {
		this.devices = this.deviceForm.get('devices') as FormArray;
		this.devices.push(this.createDeviceForm());
	}
}
