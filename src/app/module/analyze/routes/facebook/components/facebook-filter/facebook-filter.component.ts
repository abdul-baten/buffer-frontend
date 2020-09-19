import subMonths from 'date-fns/subMonths';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnDestroy, HostListener } from '@angular/core';
import { FacebookFacade } from '../../facade/analyze-facebook.facade';
import { FormBuilder, FormGroup } from '@angular/forms';
import { noop } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--facebook-filter',
  styleUrls: ['./facebook-filter.component.scss'],
  templateUrl: './facebook-filter.component.html',
})
export class FacebookFilterComponent implements OnDestroy {
  filterForm: FormGroup;
  dateRange: Date[] = [subMonths(new Date(), 1), new Date()];

  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private facade: FacebookFacade, private fb: FormBuilder) {
    this.buildFilterForm();
    this.filterForm.patchValue({
      dateRange: this.dateRange,
    });
  }

  private buildFilterForm(): void {
    this.filterForm = this.fb.group({
      dateRange: [null],
    });
  }

  onSelect(): void {
    if (this.filterForm.valid) {
      const { dateRange } = this.filterForm.value;
      this.activatedRoute.parent.paramMap.subscribe((params: ParamMap) => {
        const id = params.get('id');
        this.subscriptions$.add(this.facade.getInsights({ id, dateRange }).subscribe(noop));
      });
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
