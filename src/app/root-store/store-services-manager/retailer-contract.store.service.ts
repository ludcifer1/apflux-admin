import { Observable, of } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { LoadContract } from '../stores/retailer-store/retailer.action';
import { switchMap, take, tap } from 'rxjs/operators';
import { QueryParamsModel, QueryResultsModel } from '@logixtek/data-table';
import { StudentService } from '@app/core/services/student.service';
import { RetailerContractState } from '../stores/retailer-store/retailer-contract.state';
import { RetailerContract } from '@app/shared/models/retailer.model';

export class RetailerContractStoreService {
					@Select(RetailerContractState.retailerContractList)
					retailerContractList$: Observable<any>;
					@Select(RetailerContractState.loaded)
					loaded$: Observable<any>;
					constructor(
						private store: Store,
						private retailerService: StudentService
					) {}

					getContractListFromStore() {
						if (!this.retailerContractList$) {
							return;
						}
						return this.retailerContractList$;
					}

					getRetailerContractLoaded() {
						if (!this.loaded$) {
							return;
						}
						return this.loaded$;
					}

					// DATA TABLE SUPPLIER
					getContracts(retailerId: string): Observable<QueryResultsModel> {
						return this.retailerService.getContracts(retailerId).pipe(
							tap((res: any) => {
								this.loadContractList(res);
							})
						);
					}

					private loadContractList(data: any[]) {
						this.store.dispatch(new LoadContract(data));
					}
				}
