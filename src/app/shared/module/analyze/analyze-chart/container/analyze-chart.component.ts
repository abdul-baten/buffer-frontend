import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--analyze-chart',
  styleUrls: ['./analyze-chart.component.scss'],
  templateUrl: './analyze-chart.component.html',
})
export class AnalyzeChartComponent implements AfterViewInit {
  @Input() chartBorderColor: string;
  @Input() chartLineColor: string;
  @Input() chartTitle: string;
  @Input() chartType: string;
  @Input() steppedLine: boolean;

  @Input() chartLabels?: string[];
  @Input() chartData?: any[];

  data: Record<string, any>;
  chartOptions: Record<string, any> = {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  ngAfterViewInit(): void {
    this.data = {
      labels: this.chartLabels,
      datasets: [
        {
          label: this.chartTitle,
          data: this.chartData,
          backgroundColor: ['rgba(44, 75, 255, 0.5)'],
          borderWidth: 2,
          fill: true,
          orderCapStyle: 'round',
          borderColor: this.chartLineColor,
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          showLines: true,
          spanGaps: true,
          steppedLine: false,
        },
      ],
    };
  }

  exportToExcel(): void {}
}
