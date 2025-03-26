import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apikey = 'b6f1cbe6645a7915211278501fe2d164'
  private apiurl = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private http: HttpClient) { }

  getweather(city: string): Observable<any> {
    const url =  `${this.apiurl}?q=${city}&appid=${this.apikey}&units=metric&lang=es`;
    return this.http.get<any>(url)
  }
}
