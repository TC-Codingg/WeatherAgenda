import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherAgenda';

  city: string = 'Buenos Aires';
  weatherData: any;
  forecastData: any[] = [];

  constructor (private weatherService: WeatherService) {}

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
