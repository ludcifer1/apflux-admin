import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementerRoutingModule } from './news-routing.module';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogixtekDataTableModule } from '@logixtek/data-table';
import { LogixtekCommonModule } from '@logixtek/common';
import { NewListComponent } from './components/news-list/news-list.component';
import { NewsComponent } from './container/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsAddComponent } from './components/news-add/news-add.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';

@NgModule({
	declarations: [NewsComponent, NewListComponent, NewsDetailComponent, NewsAddComponent],
	imports: [
		CommonModule,
		ImplementerRoutingModule,
		NgxSpinnerModule,
		LogixtekDataTableModule,
		LogixtekCommonModule,
		NgxSpinnerModule,
		SweetAlert2Module,
		ReactiveFormsModule,
		FormsModule
	],
	entryComponents: [
		NewsDetailComponent,
		NewsAddComponent
	]
})
export class NewsModule { }
