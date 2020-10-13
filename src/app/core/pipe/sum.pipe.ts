import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  pure: true
})
class SumPipe implements PipeTransform {
  transform (input: Array<number> | number, initial = 0): unknown {
    return Array.isArray(input) ? input.reduce((previous: number, current: number) => previous + current, initial) : input;
  }
}

@NgModule({
  declarations: [SumPipe],
  exports: [SumPipe]
})
export class SumPipeModule {}
