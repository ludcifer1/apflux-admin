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
				path: 'students',
				loadChildren: () =>
					import('@app/page-modules/students/students.module').then(
						m => m.StudentsModule
					)
			},
			{
				path: 'class',
				loadChildren: () =>
					import('app/page-modules/class/class.module').then(m => m.ClassModule)
			},
			{
				path: 'timeTable',
				loadChildren: () =>
					import('@app/page-modules/subjects/subjects.module').then(
						m => m.SubjectsModule
					)
			},
			{
				path: 'news',
				loadChildren: () =>
					import('@app/page-modules/news/news.module').then(m => m.NewsModule)
			},
			{ path: 'error/:type', component: ErrorPageComponent },
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
		]
	}
];
