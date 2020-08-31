import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { saveAs } from 'file-saver';
import { utils, WorkBook, WorkSheet, write } from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--analyze-chart',
  styleUrls: ['./analyze-chart.component.scss'],
  templateUrl: './analyze-chart.component.html',
})
export class AnalyzeChartComponent implements OnChanges {
  @Input() chartBorderColor: string;
  @Input() chartLineColor: string;
  @Input() chartTitle: string;
  @Input() chartType: string;
  @Input() steppedLine: boolean;

  chartData: Record<string, any>;
  chartOptions: Record<string, any> = {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  };

  excelData: any = [
    {
      eid: 'e101',
      ename: 'ravi',
      esal: 1000,
    },
    {
      eid: 'e102',
      ename: 'ram',
      esal: 2000,
    },
    {
      eid: 'e103',
      ename: 'rajesh',
      esal: 3000,
    },
  ];

  constructor() {
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: this.chartTitle,
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderWidth: 2,
          fill: false,
          orderCapStyle: 'round',
          borderColor: '',
          pointBorderColor: '',
          pointBackgroundColor: '',
          showLine: true,
          spanGaps: false,
          steppedLine: true,
          // label: '2017',
          // fill: true,
          // lineTension: 0.3,
          // backgroundColor: 'rgba(77, 193, 75, 0.4)',
          // borderColor: 'rgba(44, 75, 255, 0.5)',
          // borderCapStyle: 'butt',
          // borderDash: [],
          // borderDashOffset: 0.0,
          // borderJoinStyle: 'miter',
          // borderWidth: 1,
          // pointBorderColor: 'rgba(44, 75, 255, 1)',
          // pointBackgroundColor: '#fff',
          // pointBorderWidth: 1,
          // pointHoverRadius: 5,
          // pointHoverBackgroundColor: 'rgba(44, 75, 255, 1)',
          // pointHoverBorderColor: 'rgba(220,220,220,1)',
          // pointHoverBorderWidth: 2,
          // pointRadius: 1,
          // pointHitRadius: 0,
        },
      ],
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chartTitle = changes.chartTitle.currentValue;
    this.chartType = changes.chartType.currentValue;
    this.chartData.datasets[0].borderColor = changes.chartLineColor.currentValue;
    this.chartData.datasets[0].pointBorderColor = changes.chartBorderColor.currentValue;
    this.chartData.datasets[0].pointBackgroundColor = changes.chartBorderColor.currentValue;
    this.chartData.datasets[0].steppedLine = changes.steppedLine.currentValue;
  }

  private saveAsExcelFile(buffer: BlobPart, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION, { autoBom: true });
  }

  exportToExcel(): void {
    const worksheet: WorkSheet = utils.json_to_sheet(this.excelData);
    const workbook: WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, this.chartTitle);
  }
}
