import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ManufacturerComponent } from './container/manufacturer.component';
import { ManufacturerProfilesComponent } from './components/manufacturer-profiles/manufacturer-profiles.component';

const routes: Routes = [
	{
		path: '',
		component: ManufacturerComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'profiles'
			},
			{
				path: 'profiles',
				component: ManufacturerProfilesComponent
			},

			{ path: '**', redirectTo: 'error/403', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManufacturerRoutingModule {}
