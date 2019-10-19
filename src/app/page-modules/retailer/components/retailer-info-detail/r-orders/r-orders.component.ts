import * as _moment from 'moment';

import { Component, OnInit } from '@angular/core';
import {
	DateColumn,
	DateFilter,
	DropdownFilter,
	IDataTable,
	NumberColumn,
	TextColumn,
	TextFilter
} from '@logixtek/data-table';

import { RetailerOrderStoreService } from '@app/root-store/store-services-manager/retailer-order.store.service';

@Component({
	selector: 'r-orders',
	templateUrl: './r-orders.component.html',
	styleUrls: ['./r-orders.component.scss']
})
export class ROrdersComponent implements OnInit {
	// ================================================
	// =              ATTRIBUTES SECTION              =
	// ================================================
	config: IDataTable;
	retailerCode: string;
	// ================================================
	// =             CONSTRUCTOR SECTION              =
	// ================================================

	constructor(private retailerORDStoreService: RetailerOrderStoreService) {}

	ngOnInit() {
		this.config = {
			title: 'Đơn hàng',
			paging: { pageSize: 5 },
			columns: [
				new DateColumn({
					field: 'orderDate',
					columnDisplayName: 'Ngày đặt hàng'
				}),
				new NumberColumn({
					field: 'totalAmount',
					columnDisplayName: 'Giá trị đơn hàng'
				}),
				new NumberColumn({
					field: 'totalQuantity',
					columnDisplayName: 'Tổng số mặt Hàng'
				}),
				new TextColumn({
					field: 'manufacturerName',
					columnDisplayName: 'Nhà Sản Xuất'
				}),
				new TextColumn({
					field: 'distributorName',
					columnDisplayName: 'Nhà phân phối'
				}),
				new DateColumn({
					field: 'estimatedDeliveryDate',
					columnDisplayName: 'Ngày giao hàng dự kiến'
				}),
				new DateColumn({
					field: 'actualDeliveryDate',
					columnDisplayName: 'Ngày giao hàng thực tế'
				}),
				new TextColumn({
					field: 'status',
					columnDisplayName: 'Trạng thái'
				})
			],
			filters: [
				new TextFilter('orderNumber', {
					columnSpan: 1,
					placeholder: 'Tìm theo mã đơn hàng'
				}),
				new DateFilter({
					fieldToFilter: 'orderDate',
					placeholder: 'Đơn hàng',
					defaultFromValue: this.getStartDate(),
					defaultToValue: this.getCurrentDate()
				}),
				new DropdownFilter({
					fieldToFilter: 'status',
					placeholder: 'Trạng thái',
					itemValueField: 'status',
					itemLabelField: 'name',
					itemSource: null
				})
			],
			dataService: this.retailerORDStoreService
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
