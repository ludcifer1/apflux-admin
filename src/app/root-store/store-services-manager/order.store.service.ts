import { OrderService } from '@app/core/services/order.service';
import { Store, Select } from '@ngxs/store';
import {
	LoadOrderDetail,
	LoadOrderDetailSuccess,
	LoadOrderDetailFail
} from '../stores/order-store/order.action';
import { tap, catchError } from 'rxjs/operators';
import { OrderState } from '../stores/order-store/order.state';
import { Observable } from 'rxjs';
import { OrderModel } from '@app/shared/models/order.model';

export class OrderStoreService {
	@Select(OrderState.orderDetail) orderDetail$: Observable<any>;
	@Select(OrderState.orderError) orderError$: Observable<any>;
	@Select(OrderState.orderLoading) orderLoading$: Observable<any>;

	constructor(private orderService: OrderService, private store: Store) {}

	getOrderLoading() {
		return this.orderLoading$;
	}
	getOrderError() {
		return this.orderError$;
	}
	getOrderDetail() {
		return this.orderDetail$;
	}

	searchOrderByCode(code: any) {
		this.store.dispatch(new LoadOrderDetail());
		return this.orderService.getOrderByCode(code).pipe(
			tap((res: any) => {
				if (res) {
					this.store.dispatch(
						new LoadOrderDetailSuccess(new OrderModel(res.result))
					);
				}
			}),
			catchError((error: any) => {
				return this.store.dispatch(new LoadOrderDetailFail(error));
			})
		);
	}
}
