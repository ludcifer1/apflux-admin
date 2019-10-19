import { BaseComponent } from '@app/system-module/metronic-module/views/themes/demo1/base/base.component';
import { Routes } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { ErrorPageComponent } from '@app/system-module/metronic-module/views/themes/demo1/content/error-page/error-page.component';

export const metronicRoutes: Routes = [
	{
		path: '',
		component: BaseComponent,
		children: [
			{
				path: 'dashboard',
				loadChildren: () =>
					import(
						'app/system-module/metronic-module/views/pages/dashboard/dashboard.module'
					).then(m => m.DashboardModule)
			},
			{
				path: 'retailers',
				loadChildren: () =>
					import('app/page-modules/retailer/retailer.module').then(
						m => m.RetailerModule
					)
			},
			{
				path: 'distributors',
				loadChildren: () =>
					import('app/page-modules/distributor/distributor.module').then(
						m => m.DistributorModule
					)
			},
			{
				path: 'manufactures',
				loadChildren: () =>
					import('@app/page-modules/manufacturer/manufacturer.module').then(
						m => m.ManufacturerModule
					)
			},
			{
				path: 'implementers',
				loadChildren: () =>
					import('@app/page-modules/implementer/implementer.module').then(
						m => m.ImplementerModule
					)
			},
			{ path: 'error/:type', component: ErrorPageComponent },
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
		]
	}
];
