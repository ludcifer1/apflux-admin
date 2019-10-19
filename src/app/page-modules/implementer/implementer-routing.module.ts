import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ImplementerComponent } from './container/implementer.component';
import { ImplementerProfilesComponent } from './components/implementer-profiles/implementer-profiles.component';

const routes: Routes = [
	{
		path: '',
		component: ImplementerComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'imp-profiles'
			},
			{
				path: 'imp-profiles',
				component: ImplementerProfilesComponent
			},

			{ path: '**', redirectTo: 'error/403', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ImplementerRoutingModule {}
