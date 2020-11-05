import memo from 'memo-decorator';
import { IConnection } from '../model';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tooltip',
  pure: true
})
export class TooltipPipe implements PipeTransform {
  @memo()
  transform (connection: IConnection): string {
    const connection_type = connection.connection_type.split('_').join(' ').
      trim();

    return `${connection.connection_name} | ${connection_type}`;
  }
}

@NgModule({
  declarations: [TooltipPipe],
  exports: [TooltipPipe]
})
export class TooltipPipeModule {}
