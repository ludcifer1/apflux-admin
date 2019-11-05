import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { TimeTableComponent } from './container/time-table.component';
import { TimeTableListComponent } from './components/time-table-list/time-table-list.component';

const routes: Routes = [
	{
		path: '',
		component: TimeTableComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'time-table-list'
			},
			{
				path: 'time-table-list',
				component: TimeTableListComponent
			},

			{ path: '**', redirectTo: 'error/403', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TimeTableRoutingModule {}
