import * as _moment from 'moment';

import { Component, OnInit } from '@angular/core';
import {
	DateColumn,
	DateFilter,
	IDataTable,
	NumberColumn,
	TextColumn
} from '@logixtek/data-table';
import { RetailerSellOutStoreService } from '@app/root-store/store-services-manager/retailer-sellout.store.service';

@Component({
	selector: 'r-sellout',
	templateUrl: './r-sellout.component.html',
	styleUrls: ['./r-sellout.component.scss']
})
export class RSelloutComponent implements OnInit {
	// ================================================
	// =              ATTRIBUTES SECTION              =
	// ================================================
	config: IDataTable;
	retailerCode: string;
	// ================================================
	// =             CONSTRUCTOR SECTION              =
	// ================================================

	constructor(
		private retailerSellOutStoreService: RetailerSellOutStoreService
	) {}

	ngOnInit() {
		this.config = {
			title: 'Đơn hàng',
			paging: { pageSize: 5 },
			columns: [
				new TextColumn({
					field: 'purchasedDay',
					columnDisplayName: 'Ngày Bán'
				}),
				new TextColumn({
					field: 'purchasedTime',
					columnDisplayName: 'Thời Gian Bán'
				}),
				new TextColumn({
					field: 'shopperName',
					columnDisplayName: 'Tên Khách Hàng'
				}),
				new NumberColumn({
					field: 'totalAmount',
					columnDisplayName: 'Số Tiền Hàng'
				}),
				new NumberColumn({
					field: 'cutomerPay',
					columnDisplayName: 'Số Tiền Thanh Toán'
				})
			],
			filters: [
				new DateFilter({
					fieldToFilter: 'date',
					placeholder: '',
					defaultFromValue: this.getStartDate(),
					defaultToValue: this.getCurrentDate(),
					// TODO: Awaiting Support for Date Limitation from Table
				})
			],
			dataService: this.retailerSellOutStoreService
		};
	}

	// ================================================
	// =                   PRIVATE                    =
	// ================================================
	private getCurrentDate(): Date {
		return _moment().toDate();
	}
	private getStartDate(): Date {
		const res = _moment()
			.subtract(7, 'days')
			.toDate();
		return res;
	}
}
