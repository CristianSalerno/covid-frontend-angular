import { CovidserviceService } from '../services/covidservice.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  covidData: any;
  covidActualDate: any;
  actualDate: any;
  covidCountriesConfirmed: Object;
  countries: any;

  constructor(private CovidserviceService: CovidserviceService) {

  }

  async ngOnInit() {
    this.covidData = await this.CovidserviceService.getAllCovidData()
    this.getTodayDate()
    this.getCountriesWithCovid()
  }

  async getTodayDate() {
    this.covidActualDate = await this.CovidserviceService.getAllCovidData()
    this.actualDate = moment(this.covidData.Date).format('LLLL')
  }

  async getCountriesWithCovid() {
    this.covidCountriesConfirmed = await this.CovidserviceService.getAllCovidData()
    this.countries = this.covidData.Countries;
  }


}
