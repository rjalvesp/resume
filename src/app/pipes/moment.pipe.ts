import * as Moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'moment' })
export class MomentPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return Moment.utc(value, 'YYYY/MM/DD').format(args.length > 0? args[0] : 'YYYY-MM-DD');
  }
}
