// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailerComponent } from './container/retailer.component';
import { StudentListComponent } from './components/student-list/student-list.component';

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
				component: StudentListComponent
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
