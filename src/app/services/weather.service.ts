import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apikey = 'b6f1cbe6645a7915211278501fe2d164'
  private apiurl = 'https://api.openweathermap.org/data/2.5/'

  constructor(private http: HttpClient) { }

  getweather(city: string): Observable<any> {
    const url =  `${this.apiurl}/weather?q=${city}&appid=${this.apikey}&units=metric&lang=en`;
    return this.http.get<any>(url)
  }

  getForecast(city: string): Observable<any> {
    const url =  `${this.apiurl}/forecast?q=${city}&appid=${this.apikey}&units=metric&lang=en`;
    
    return this.http.get<any>(url).pipe(
      map((data) =>{
        return data.list
        .filter((reading: any) => reading.dt_txt.includes("12:00:00"))
        .map((reading: any) => ({
          date: reading.dt_txt.split(' ')[0],
          temp: reading.main.temp,
          humidity: reading.main.humidity,
          description: reading.weather[0].description,
          icon: reading.weather[0].icon
        }))
      }
      )
    )
  }
}
