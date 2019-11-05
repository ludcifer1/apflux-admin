import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewListComponent } from './components/news-list/news-list.component';
import { NewsComponent } from './container/news.component';

const routes: Routes = [
	{
		path: '',
		component: NewsComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'news-list'
			},
			{
				path: 'news-list',
				component: NewListComponent
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
