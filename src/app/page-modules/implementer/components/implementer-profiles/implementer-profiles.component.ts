import { Component, OnInit } from '@angular/core';
import {
	IDataTable,
	TextColumn,
	DropdownFilter,
	TextFilter
} from '@logixtek/data-table';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap';
import { IMPLEMENTER } from '@app/shared/constants/implementer.constant';
import { ImplementerStoreService } from '@app/root-store/store-services-manager/implementer.store.service';

@Component({
	selector: 'kt-implementer-profiles',
	templateUrl: './implementer-profiles.component.html',
	styleUrls: ['./implementer-profiles.component.scss']
})
export class ImplementerProfilesComponent implements OnInit {
	config: IDataTable;
	bsModalRef: BsModalRef;
	modalConfig: ModalOptions;

	constructor(private impStoreService: ImplementerStoreService) {}

	ngOnInit() {
		this.config = {
			title: IMPLEMENTER.TEXT,
			dataService: this.impStoreService,
			controlButtons: [],
			columns: [
				new TextColumn({
					field: 'userName',
					columnDisplayName: IMPLEMENTER.IMP_ACCOUNT
				}),
			],
			filters: [
				new TextFilter(['userName', 'implementerName'], {
					columnSpan: 1,
					placeholder: 'Search'
				}),
				new DropdownFilter({
					fieldToFilter: 'city',
					placeholder: 'Thành phố',
					itemValueField: 'id',
					itemLabelField: 'name',
					itemSource: null
				}),
				new DropdownFilter({
					fieldToFilter: 'district',
					placeholder: 'Quận',
					itemValueField: 'id',
					itemLabelField: 'name',
					itemSource: null
				}),
				new DropdownFilter({
					fieldToFilter: 'ward',
					placeholder: 'Xã/Phường',
					itemValueField: 'id',
					itemLabelField: 'name',
					itemSource: null
				})
			]
		};
	}
}
