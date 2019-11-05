import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MsalGuard, MsalInterceptor, MsalModule } from '@azure/msal-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core';
import { HttpUtilsService } from './system-module/metronic-module/core/_base/crud';
import { MetronicModule } from './system-module/metronic-module/metronic-module.module';
import { NgModule } from '@angular/core';
import { StudentsModule } from './page-modules/students/students.module';
import { RootStoreModule } from './root-store';
import { SharedModule } from './shared';
import { environment } from '@env/environment';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { DistributorModule } from './page-modules/distributor/distributor.module';

import { registerLocaleData } from '@angular/common';
import { defineLocale } from 'ngx-bootstrap';
import localVi from '@angular/common/locales/vi';
import { viLocale } from 'ngx-bootstrap/locale';
import { NewsModule } from './page-modules/news/news.module';
import { TimeTableModule } from './page-modules/time-table/time-table.module';

// NGXS

//
registerLocaleData(localVi);
defineLocale('vi', viLocale);

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		CoreModule,
		//
		SweetAlert2Module.forRoot(),
		//
		// NGX
		NgbModule.forRoot(),
		ModalModule.forRoot(),
		ToastrModule.forRoot({
			positionClass: 'toast-bottom-center',
			maxOpened: 3
		}),
		// NGXS
		RootStoreModule,
		// SYSTEM MODULE
		MetronicModule,
		SharedModule,
		// PAGES
		NewsModule,
		StudentsModule,
		DistributorModule,
		TimeTableModule,
		// MSAL
		AccordionModule.forRoot()
	],
	exports: [],
	providers: [HttpUtilsService, BsModalService],
	bootstrap: [AppComponent]
})
export class AppModule {}
