import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementerRoutingModule } from './news-routing.module';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogixtekDataTableModule } from '@logixtek/data-table';
import { LogixtekCommonModule } from '@logixtek/common';
import { NewListComponent } from './components/news-list/news-list.component';
import { NewsComponent } from './container/news.component';

@NgModule({
	declarations: [NewsComponent, NewListComponent],
	imports: [
		CommonModule,
		ImplementerRoutingModule,
		NgxSpinnerModule,
		LogixtekDataTableModule,
		LogixtekCommonModule
	]
})
export class NewsModule {}
