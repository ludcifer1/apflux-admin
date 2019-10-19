import * as _ from 'lodash';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deepProperty'
})

export class DeepPropertyPipe implements PipeTransform {
  transform(value: any, args: any): any {
    return _.get(value, args);
  }
}
