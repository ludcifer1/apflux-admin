import { Routes, RouterModule } from '@angular/router';
import { DistributorComponent } from './container/distributor.component';
import { DistributorListComponent } from './components/distributor-list/distributor-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: '',
		component: DistributorComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'dt-list'
			},
			{
				path: 'dt-list',
				component: DistributorListComponent
			},

			{ path: '**', redirectTo: 'error/403', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DistributorRoutingModule {}
