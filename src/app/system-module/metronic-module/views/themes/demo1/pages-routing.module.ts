// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { metronicRoutes } from '@app/shared/constants';
// Auth

@NgModule({
	imports: [RouterModule.forChild(metronicRoutes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {}
