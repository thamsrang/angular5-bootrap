import { Component, OnInit } from '@angular/core';
import '../../assets/js/chart.js';
import * as moment from '../../assets/js/moment.js';

const Chart: any = window['Chart'];

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.multiChart();
    this.bubbleChart();
    this.doughnutChart();
  }

  multiChart() {
    const config = {
      type: 'bar',
      data: {
        labels: ['Feb 3', 'Feb 6', 'Feb 9', 'Feb 12', 'Feb 15', 'Feb 18',
          'Feb 21', 'Feb 24', 'Feb 27'],
        datasets: [{
          label: 'Power Consumption',
          fill: false,
          backgroundColor: '#fd79a8',
          borderColor: '#e84393',
          data: [33, 43, 29, 47, 37, 34, 42, 35, 39],
          type: 'line'
        },
        {
          label: 'Power Generation',
          backgroundColor: '#55efc4',
          borderColor: '#00b894',
          data: [53, 61, 50, 57, 65, 58, 49, 63, 52],
          fill: false,
        }]
      },
      options: {
        responsive: true,
        title: {
          display: false,
          text: 'Power Generation'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: false,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }]
        }
      }
    };
    const ele = <HTMLCanvasElement>document.getElementById('multiChart');
    const ctx = ele.getContext('2d');
    const myChart = new Chart(ctx, config);
  }

  bubbleChart() {
    const config = {
      type: 'doughnut',
      data: {
        labels: ['Light', 'Fridge', 'Fan', 'Water Pump', 'Electric Vechical', 'TV', 'AC'],
        datasets: [
          {
            label: 'Solar Power Consumption',
            data: [65, 59, 90, 81, 56, 55, 40],
            backgroundColor: ['#a29bfe',
            '#81ecec',
            '#fab1a0',
            '#fdcb6e',
            '#55efc4',
            '#badc58',
            '#95afc0'
          ],
          }
        ]
      },
      'options': {
        title: {
          display: true,
          text: 'Solar Power Consumption'
        },
        legend: {
          display: true,
          position: 'right'
        },
        'elements':
          { 'line': { 'tension': 0, 'borderWidth': 3 } }
      }
    };
    const ele = <HTMLCanvasElement>document.getElementById('bubbleChart');
    const ctx = ele.getContext('2d');
    const myChart = new Chart(ctx, config);
  }

  doughnutChart() {
    const config = {
      type: 'doughnut',
      data: {
        labels: ['Light', 'Fridge', 'Fan', 'Water Pump', 'Electric Vechical', 'TV', 'AC'],
        datasets: [
          {
            label: 'Public Power Consumption',
            data: [59, 81, 56, 65, 55, 90, 40],
            backgroundColor: ['#ffcccc',
            '#fc5c65',
            '#4b7bec',
            '#fdcb6e',
            '#32ff7e',
            '#fff200',
            '#7efff5'
          ],
          }
        ]
      },
      'options': {
        title: {
          display: true,
          text: 'Public Power Consumption'
        },
        legend: {
          display: true,
          position: 'right'
        },
        'elements':
          { 'line': { 'tension': 0, 'borderWidth': 3 } }
      }
    };
    const ele = <HTMLCanvasElement>document.getElementById('doughnutChart');
    const ctx = ele.getContext('2d');
    const myChart = new Chart(ctx, config);
  }
}
