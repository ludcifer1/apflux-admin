import {
	Component,
	OnInit,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import {
	DropdownFilter,
	IDataTable,
	NumberColumn,
	TextColumn,
	TextFilter
} from '@logixtek/data-table';

import { Observable } from 'rxjs';
import { RetailerInventoryStoreService } from '@app/root-store/store-services-manager/retailer-inventory.store.service';
import { UTILS } from '@app/shared/constants';

@Component({
	selector: 'r-inventory',
	templateUrl: './r-inventory.component.html',
	styleUrls: ['./r-inventory.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class RInventoryComponent implements OnInit {
	@ViewChild('invStat', { static: true }) statRef;
	// ================================================
	// =              ATTRIBUTES SECTION              =
	// ================================================
	config: IDataTable;
	retailerCode: string;
	inventoryStat$: Observable<any>;
	CONST_UTILS = UTILS;

	// ================================================
	// =             CONSTRUCTOR SECTION              =
	// ================================================

	constructor(private retailerINVStoreService: RetailerInventoryStoreService) {
		this.inventoryStat$ = this.retailerINVStoreService.getInventoryStat();
	}

	ngOnInit() {
		this.config = {
			title: 'Kho hàng',
			paging: { pageSize: 5 },
			columns: [
				new TextColumn({
					field: 'productItemCode',
					columnDisplayName: 'Mã Hệ Thống'
				}),
				new TextColumn({
					field: 'barcode',
					columnDisplayName: 'Mã Vạch'
				}),
				new TextColumn({
					field: 'productName',
					columnDisplayName: 'Tên Sản Phẩm'
				}),
				new TextColumn({
					field: 'unitName',
					columnDisplayName: 'Đơn vị'
				}),
				new NumberColumn({
					field: 'quantity',
					columnDisplayName: 'Số Lượng'
				}),
				new NumberColumn({
					field: 'purchasingPrice',
					columnDisplayName: 'Giá Vốn'
				}),
				new NumberColumn({
					field: 'sellingPrice',
					columnDisplayName: 'Giá bán'
				})
			],
			filters: [
				new TextFilter(['productNameQuery'], {
					columnSpan: 1,
					placeholder: 'Tìm sản phẩm'
				}),
				new DropdownFilter({
					fieldToFilter: 'categoryCode',
					placeholder: 'Danh mục',
					itemValueField: 'categoryCode',
					itemLabelField: 'categoryName',
					itemSource: this.retailerINVStoreService.getRetailerCategory()
				}),
				new DropdownFilter({
					fieldToFilter: 'subCategoryCode',
					placeholder: 'Danh mục phụ',
					itemValueField: 'subCategoryCode',
					itemLabelField: 'subCategoryName',
					itemSource: this.retailerINVStoreService.getRetailerSubCategory()
				})
			],
			filterTemplate: this.statRef,
			dataService: this.retailerINVStoreService
		};
	}
}
