import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { SubjectsComponent } from './container/subjects.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';

const routes: Routes = [
	{
		path: '',
		component: SubjectsComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'subject-list'
			},
			{
				path: 'subject-list',
				component: SubjectListComponent
			},

			{ path: '**', redirectTo: 'error/403', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SubjectsRoutingModule {}
