// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/auth/authentication.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import(
				'../app/system-module/metronic-module/metronic-module.module'
			).then(m => m.MetronicModule)
	},

	{ path: '**', redirectTo: 'error/403', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
