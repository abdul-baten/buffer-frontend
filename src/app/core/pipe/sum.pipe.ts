import memo from 'memo-decorator';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  pure: true
})
export class SumPipe implements PipeTransform {
  @memo()
  transform (input: Array<number> | number, initial = 0): number {
    return Array.isArray(input) ? input.reduce((previous: number, current: number) => previous + current, initial) : input;
  }
}

@NgModule({
  declarations: [SumPipe],
  exports: [SumPipe]
})
export class SumPipeModule {}
