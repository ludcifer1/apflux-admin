import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { DeviceFake } from './fake-db/device-fake';
import { RetailerFake } from './fake-db/retailer-fake';
import { ContractFake } from './fake-db/contract-fake';
@Injectable({
	providedIn: 'root'
})
export class AppFakeApiService implements InMemoryDbService {
	constructor() {}

	createDb(): {} | Observable<{}> {
		return {
			devices: DeviceFake.devices,
			deviceHistory: DeviceFake.deviceHistory,
			retailers: RetailerFake.retailers,
			contracts: ContractFake.contracts
		};
	}
}
