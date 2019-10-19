import { ImplementerService } from '@app/core/services/implementer.service';
import { QueryParamsModel } from '@logixtek/data-table';

export class ImplementerStoreService {
	constructor(private impService: ImplementerService) {}


	find(queryParams: QueryParamsModel) {
		return this.impService.getAllImplementers(queryParams);
	}
}
