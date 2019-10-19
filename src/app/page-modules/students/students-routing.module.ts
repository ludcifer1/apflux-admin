// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailerInfoComponent } from './components/retailer-info/retailer-info.component';
import { RetailerDeviceComponent } from './components/retailer-device/retailer-device.component';
import { RetailerContractComponent } from './components/retailer-contract/retailer-contract.component';
import { RetailerOrderComponent } from './components/retailer-order/retailer-order.component';
import { RetailerComponent } from './container/retailer.component';

const routes: Routes = [
	{
		path: '',
		component: RetailerComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'info'
			},
			{
				path: 'info',
				component: RetailerInfoComponent
			},
			{
				path: 'orders',
				component: RetailerOrderComponent
			},
			{
				path: 'contracts',
				component: RetailerContractComponent
			},
			{
				path: 'devices',
				component: RetailerDeviceComponent
			},

			{ path: '**', redirectTo: 'error/403', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StudentsRoutingModule {}
