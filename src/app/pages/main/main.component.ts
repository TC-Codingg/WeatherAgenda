import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit { 
  title = 'WeatherAgenda';

  city: string = 'Buenos Aires';
  weatherData: any;
  forecastData: any[] = [];

  constructor (private weatherService: WeatherService) {}

    ngOnInit(): void {
      this.getWeather();
    }
  

  getWeather() {
    this.weatherService.getweather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(data);
      },
      (error) => {
        console.error('Error while obtaining weather: ', error);
      }
    );

    this.weatherService.getForecast(this.city).subscribe(
      (data) => {
        this.forecastData = data;
        
      },
      (error) => {
        console.error('Error while obtaining weather forecast: ', error)
      }
    );
  }


}
