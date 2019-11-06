import { Routes, RouterModule } from '@angular/router';
import { DistributorComponent } from './container/distributor.component';
import { NgModule } from '@angular/core';
import { ClassListComponent } from './components/class-list/class-list.component';

const routes: Routes = [
	{
		path: '',
		component: DistributorComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'class-list'
			},
			{
				path: 'class-list',
				component: ClassListComponent
			},

			{ path: '**', redirectTo: 'error/403', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClassRoutingModule {}
