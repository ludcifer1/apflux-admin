// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	// enable this router to set which demo theme to load,
	{
		path: '',
		loadChildren: () =>
			import('../metronic-module/views/themes/demo1/theme.module').then(
				m => m.ThemeModule
			)
	},


	{ path: '**', redirectTo: 'error/403', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MetronicModuleRoutingModule {}
