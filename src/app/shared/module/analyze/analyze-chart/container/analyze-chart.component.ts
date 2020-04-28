import * as Highcharts from 'highcharts';
import HC_Exporting from 'highcharts/modules/exporting';
import HC_Exporting_D from 'highcharts/modules/export-data';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

HC_Exporting(Highcharts);
HC_Exporting_D(Highcharts);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--analyze-chart',
  templateUrl: './analyze-chart.component.html',
  styleUrls: ['./analyze-chart.component.scss'],
})
export class AnalyzeChartComponent implements AfterViewInit, OnChanges {
  @Input() chartType: string;
  @Input() chartCaption: string;
  @Input() chartTooltipHeaderFormat: string;
  @Input() chartTooltipPointFormat: string;
  @Input() chartLineColor: string;

  Highcharts = Highcharts; // required
  chartOptions = {
    chart: {
      type: 'line',
      style: {
        fontFamily: "'Buffer-Sans-Medium', Arial, sans-serif",
      },
    },
    tooltip: {
      backgroundColor: '#717171',
      borderColor: '#717171',
      borderRadius: 8,
      borderWidth: 0,
      shadow: false,
      style: {
        color: '#ffffff',
        cursor: 'default',
        fontSize: '0.875rem',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        padding: 16,
      },
      headerFormat: '',
      pointFormat: '',
      shared: true,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        showInLegend: true,
      },
    },
    series: [
      {
        data: [1, 2, 3, 1, 5],
      },
    ],
    title: {
      text: '',
      align: 'left',
      margin: 40,
      className: 'buffer--cursor-pointer',
      style: {
        color: '#616061',
        fontSize: '1rem',
      },
    },
    xAxis: {
      gridLineColor: '#f2f2f2',
      title: {
        enabled: false,
      },
    },
    yAxis: {
      gridLineColor: '#f2f2f2',
      title: {
        enabled: false,
      },
    },
    colors: [''],
    credits: {
      enabled: false,
    },
    exporting: {
      csv: {
        dateFormat: '%Y-%m-%d',
      },
      chartOptions: {
        chart: {
          style: {
            fontFamily: "'Buffer-Sans-Medium', Arial, sans-serif",
          },
        },
      },
      enabled: true,
      buttons: {
        contextButton: {
          symbol: 'url(/assets/images/icon/save_alt.svg)',
          className: 'buffer--cursor-pointer',
          symbolSize: 36,
          height: 40,
          width: 40,
          symbolX: 12.5, // The x position of the center of the symbol inside the button.
          symbolY: 10.5,
          theme: {
            fill: '#ffffff',
            stroke: '#ffffff',
            states: {
              hover: {
                fill: '#ffffff',
                stroke: '#ffffff',
              },
              select: {
                fill: '#ffffff',
                stroke: '#ffffff',
              },
            },
          },
          menuItems: [
            {
              text: 'Export chart (PDF)',
              onclick() {
                this.exportChart({
                  type: 'application/pdf',
                });
              },
            },
            {
              text: 'Export chart (PNG)',
              onclick() {
                this.exportChart();
              },
            },
            {
              text: 'Export chart (CSV)',
              onclick() {
                this.downloadCSV();
              },
            },
          ],
        },
      },
    },
  }; // required
  runOutsideAngular = true; // optional boolean, defaults to false

  ngAfterViewInit() {
    // console.warn(HC_exporting(Highcharts));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chartOptions.title.text = this.chartCaption = changes.chartCaption.currentValue;
    this.chartTooltipHeaderFormat = changes.chartTooltipHeaderFormat.currentValue;
    this.chartTooltipPointFormat = changes.chartTooltipPointFormat.currentValue;
    this.chartOptions.chart.type = this.chartType = changes.chartType.currentValue;

    this.chartOptions.tooltip.headerFormat = `${this.chartTooltipHeaderFormat}<br>`;
    this.chartOptions.tooltip.pointFormat = this.chartTooltipPointFormat;
    this.chartOptions.colors = [changes.chartLineColor.currentValue];
  }
}
