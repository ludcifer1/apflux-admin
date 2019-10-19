import 'hammerjs';
import {
	PERFECT_SCROLLBAR_CONFIG,
	PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { CommonModule } from '@angular/common';
import { DirectiveModule } from '@app/shared/directives/directive.module';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipeModule } from '@app/shared/pipes/pipe.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppFakeApiService } from './fake-api/app-fake-api.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ErrorHandlerService } from './services/error-handler.service';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	// suppressScrollX: true
};

@NgModule({
	imports: [
		CommonModule,
		DirectiveModule,
		PipeModule,
		HttpClientInMemoryWebApiModule.forRoot(AppFakeApiService, {
			passThruUnknownUrl: true
		})
	],
	declarations: [],
	exports: [DirectiveModule, PipeModule],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},

		AppFakeApiService,
		BsModalRef,
		ErrorHandlerService
	]
})
export class SharedModule {}
