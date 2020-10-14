/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-lines-per-function */
import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import Exporting_D from 'highcharts/modules/export-data';
import Exporting_O from 'highcharts/modules/offline-exporting';
import More from 'highcharts/highcharts-more';
import NoData from 'highcharts/modules/no-data-to-display';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

Exporting(Highcharts);
Exporting_D(Highcharts);
Exporting_O(Highcharts);
More(Highcharts);
NoData(Highcharts);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-analyze-chart',
  styleUrls: ['./analyze-chart.component.css'],
  templateUrl: './analyze-chart.component.html'
})
export class AnalyzeChartComponent implements OnChanges {
  @Input() chart_labels?: string[];
  @Input() chart_title = '';
  @Input() chart_type = '';
  @Input()
  chart_series!: { name: string; data?: any[]; type?: string; color?: string }[];

  high_charts = Highcharts;
  is_high_charts = typeof Highcharts === 'object';
  update_from_input = false;
  chart_ref!: Highcharts.Chart;

  chart_options = {
    // eslint-disable-next-line no-invalid-this
    ...this.getOptions()
  };

  // eslint-disable-next-line no-invalid-this
  opt_from_input = JSON.parse(JSON.stringify(this.chart_options));

  private getOptions (type: string = '', categories: string[] = []): Highcharts.Options {
    return {
      chart: {
        type,
        style: {
          width: 400,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
        }
      },
      title: {
        text: ''
      },
      legend: {
        align: 'right',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        borderRadius: 8,
        enabled: true,
        padding: 16,
        itemStyle: {
          fontSize: '0.725rem'
        },
        itemCheckboxStyle: {
          height: 20,
          width: 20
        }
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'category',
        categories,
        gridLineColor: '#f2f2f2',
        gridLineDashStyle: 'LongDashDotDot'
      },
      yAxis: {
        gridLineColor: '#f2f2f2',
        gridLineDashStyle: 'LongDashDotDot',
        title: {
          text: ''
        }
      },
      colors: ['#4B75F2', '#04D98B', '#2196f3', '#9c27b0', '#fbc02d', '#e0245e'],
      tooltip: {
        backgroundColor: '#000001',
        borderColor: '#000001',
        borderRadius: 8,
        shadow: false,
        padding: 16,
        style: {
          color: '#ffffff',
          fontSize: '0.875rem'
        },
        pointFormat: '{series.name} <b>{point.y:,.0f}</b>'
      },
      data: {
        decimalPoint: '.'
      },
      exporting: { enabled: false },
      lang: {
        noData: 'Whoops! Seems no data is there for this date range'
      },
      plotOptions: {
        series: {
          gapSize: 5,
          turboThreshold: 0
        },
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        },
        column: {
          opacity: 0.95,
          allAreas: true,
          stacking: 'normal',
          dataLabels: {
            enabled: false
          }
        },
        areaspline: {
          borderColor: 'transparent',
          borderWidth: 0,
          fillOpacity: 0.5,
          lineColor: '#ffffff',
          lineWidth: 1
        },
        area: {
          stacking: 'overlap',
          lineColor: '#ffffff',
          lineWidth: 1,
          fillOpacity: 0.5,
          marker: {
            lineWidth: 1,
            lineColor: '#ffffff'
          }
        }
      }
    };
  }

  chartCallback = (chart: Highcharts.Chart): void => {
    // eslint-disable-next-line no-invalid-this
    this.chart_ref = chart;
  }

  ngOnChanges (changes: SimpleChanges): void {
    const chart_options: Highcharts.Options = {
      ...this.getOptions(changes?.chart_type?.currentValue, changes?.chart_labels?.currentValue),
      series: [...changes?.chart_series?.currentValue || []]
    };

    this.opt_from_input = JSON.parse(JSON.stringify(chart_options));
    this.update_from_input = true;
  }

  exportToJPEG (): void {
    this.chart_ref.exportChart(
      {
        filename: this.chart_title,
        type: 'image/jpeg'
      },
      {}
    );
  }

  exportToExcel (): void {
    this.chart_ref.downloadXLS();
  }
}
