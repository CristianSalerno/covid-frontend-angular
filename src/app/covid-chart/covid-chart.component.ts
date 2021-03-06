import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../services/covidservice.service';

@Component({
  selector: 'app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.css']
})
export class CovidChartComponent implements OnInit {

  constructor(private CovidserviceService: CovidserviceService) { }

  covidData: any;
  countries: any;
  countryArr: any;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];


  async ngOnInit() {
    this.covidData = await this.CovidserviceService.getAllCovidData()
    this.countries = this.covidData.Countries

    console.log(this.countryArr)
  }

}
