/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-lines-per-function */
import Highcharts from 'highcharts';
import safeJsonStringify from 'safe-json-stringify';
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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Parse = require('fast-json-parse');

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-analyze-chart',
  styleUrls: ['./analyze-chart.component.css'],
  templateUrl: './analyze-chart.component.html'
})
export class AnalyzeChartComponent implements OnChanges {
  @Input() chart_labels?: string[] | number[];
  @Input() chart_series!: { name: string; data?: unknown[]; type?: string; color?: string }[];
  @Input() chart_title = '';
  @Input() connection_type = '';

  public high_charts = Highcharts;
  public is_high_charts = typeof Highcharts === 'object';
  public update_from_input = false;
  public chart_ref!: Highcharts.Chart;

  public chart_options = {
    // eslint-disable-next-line no-invalid-this
    ...this.getOptions()
  };

  // eslint-disable-next-line no-invalid-this
  public opt_from_input = Parse(safeJsonStringify(this.chart_options)).value;

  private getOptions (categories: string[] = []): Highcharts.Options {
    return {
      chart: {
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
        borderRadius: 6,
        enabled: true,
        padding: 16,
        itemStyle: {
          fontSize: '0.725rem'
        },
        itemCheckboxStyle: {
          height: 30,
          width: 30
        }
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories,
        className: 'p-text-bold',
        crosshair: true,
        gridLineColor: '#f2f2f2',
        gridLineDashStyle: 'LongDashDotDot',
        showEmpty: true,
        type: 'datetime'
      },
      yAxis: {
        className: 'p-text-bold',
        gridLineColor: '#f2f2f2',
        gridLineDashStyle: 'LongDashDotDot',
        title: {
          text: ''
        }
      },
      colors: ['#3b49df', '#04D98B', '#2196f3', '#9c27b0', '#fbc02d', '#e0245e'],
      tooltip: {
        backgroundColor: '#333333',
        borderColor: '#333333',
        borderRadius: 6,
        followPointer: true,
        followTouchMove: true,
        headerFormat: '<b>{point.key}</b><br/><br/>',
        outside: true,
        padding: 16,
        pointFormat: 'Total {series.name} <b>{point.y:,.0f} &nbsp;</b>',
        shadow: false,
        shared: true,
        style: {
          color: '#ffffff',
          fontSize: '0.875rem'
        },
        useHTML: true
      },
      data: {
        decimalPoint: '.'
      },
      exporting: { enabled: false },
      lang: {
        noData: `
        <h6 class="b-text-secondary p-text-center">
          <i class="ico-2x ico-exclamation-circle"></i>
          <p class="p-text-bold p-my-2">Whoops! Seems no data is available for this date range.</p>
        </h6 >
        `
      },
      noData: {
        useHTML: true,
        style: {
          fontWeight: 'bold',
          fontSize: '0.875rem',
          color: '#333333'
        }
      },
      plotOptions: {
        series: {
          gapSize: 10,
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
          opacity: 0.8,
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

  public chartCallback = (chart: Highcharts.Chart): void => {
    // eslint-disable-next-line no-invalid-this
    this.chart_ref = chart;
  }

  ngOnChanges (changes: SimpleChanges): void {
    const chart_options: Highcharts.Options = {
      ...this.getOptions(changes?.chart_labels?.currentValue),
      series: [...changes?.chart_series?.currentValue || []]
    };

    this.opt_from_input = Parse(safeJsonStringify(chart_options)).value;
    this.update_from_input = true;
  }

  public exportToJPEG (): void {
    this.chart_ref.exportChart(
      {
        filename: this.chart_title,
        type: 'image/jpeg'
      },
      {}
    );
  }

  public exportToExcel (): void {
    this.chart_ref.downloadXLS();
  }
}
