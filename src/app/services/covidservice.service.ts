import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

  constructor(private http: HttpClient) { }


  getAllCovidData() {
    return this.http.get('http://localhost:3000/covid/getAll/').toPromise()
  }


}
