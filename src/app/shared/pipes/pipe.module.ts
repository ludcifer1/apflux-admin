import { DeepPropertyPipe } from '@app/shared/pipes/deep-property.pipe';
import { NgModule } from '@angular/core';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [],
  exports: [
    SafePipe,
    DeepPropertyPipe,
  ],
  declarations: [
    SafePipe,
    DeepPropertyPipe,
  ],
  providers: [],
})
export class PipeModule { }
