import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './user.state';

@NgModule({
	declarations: [],
	imports: [CommonModule, NgxsModule.forFeature([UserState])]
})
export class UserStoreModule {}
