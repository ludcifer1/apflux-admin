import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImplementerProfilesComponent } from './components/implementer-profiles/implementer-profiles.component';
import { ImplementerComponent } from './container/implementer.component';
import { ImplementerRoutingModule } from './implementer-routing.module';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogixtekDataTableModule } from '@logixtek/data-table';
import { LogixtekCommonModule } from '@logixtek/common';

@NgModule({
	declarations: [ImplementerComponent, ImplementerProfilesComponent],
	imports: [
		CommonModule,
		ImplementerRoutingModule,
		NgxSpinnerModule,
		LogixtekDataTableModule,
		LogixtekCommonModule
	]
})
export class ImplementerModule {}
