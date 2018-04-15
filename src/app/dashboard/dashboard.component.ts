import { Component, OnInit } from '@angular/core';
import '../../assets/js/chart.js';
import * as moment from '../../assets/js/moment.js';

const Chart: any = window['Chart'];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.lineChart();
    this.pieChart();
    this.hBarChart();
  }
  pieChart() {
    const randomScalingFactor = function () {
      return Math.round(Math.random() * 100);
    };

    const config = {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
          ],
          backgroundColor: ['#a29bfe',
            '#81ecec',
            '#fab1a0',
            '#fdcb6e',
            '#55efc4',
          ],
          label: 'Power Consumption'
        }],
        labels: [
          'Kitchen',
          'Hall',
          'Outdoor',
          'Bath Rooms',
          'Leisure Rooms'
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Overall Power Consumption'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    };

    const ele = <HTMLCanvasElement>document.getElementById('pieChart');
    const ctx = ele.getContext('2d');
    const myChart = new Chart(ctx, config);
  }

  hBarChart() {
    const config = {
      'type': 'horizontalBar',
      'data': {
        'labels': ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        'datasets': [{
          'label': 'Power Consumption',
          'data': [65, 59, 80, 81, 56, 55, 40],
          'fill': false,
          'backgroundColor': ['#55efc4', '#a29bfe', '#81ecec', '#ffeaa7', '#ff7675', '#74b9ff', '#fab1a0'],
        }]
      },
      'options': {
        title: {
          display: true,
          text: 'Monthly Power Comsumption'
        },
        legend: {
          'display': false
        },
        'scales': {
          'xAxes': [{
            'ticks': {
              'beginAtZero': true
            }
          }]
        }
      }
    };
    const ele = <HTMLCanvasElement>document.getElementById('hBarChart');
    const ctx = ele.getContext('2d');
    const myChart = new Chart(ctx, config);
  }

  lineChart() {
    const config = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Public Power',
          backgroundColor: '#fd79a8',
          borderColor: '#e84393',
          data: [7, 3, 14, 9, 13, 18, 12],
          fill: false,
        }, {
          label: 'Solor Power',
          fill: false,
          backgroundColor: '#55efc4',
          borderColor: '#00b894',
          data: [17, 3, 9, 6, 15, 9, 2],
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
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
    const ele = <HTMLCanvasElement>document.getElementById('myChart');
    const ctx = ele.getContext('2d');
    const myChart = new Chart(ctx, config);
  }
}
