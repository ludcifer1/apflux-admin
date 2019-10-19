import {
	IDataService,
	QueryParamsModel,
	QueryResultsModel
} from '@logixtek/data-table';
import { Observable } from 'rxjs';
import { CreateAccountService } from '@app/core/services/create-account.service';

export class UnregAccountStoreService implements IDataService {
	constructor(private createAccountService: CreateAccountService) {}

	find(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		return this.createAccountService.getAllNoAccountProfiles(queryParams);
	}

	createAccountbyCodeandType(salesHubCode: string, userType: string) {
		return this.createAccountService.createAccountbyCodeandType(
			salesHubCode,
			userType
		);
	}
	getAllAccountType() {
		return this.createAccountService.getAllAccountType();
	}
}
