import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class MainComponent implements OnInit { 
  title = 'WeatherAgenda';

  city: string = 'Buenos Aires';
  weatherData: any;
  forecastData: any[] = [];
  
  
  // Weather advisory

  Hot: any;
  tooHot: any;
  Cold: any;
  tooCold: any;

  Humid: any;

  Rainy: any;
  tooRainy: any;
  
  
  constructor (private weatherService: WeatherService) {}
  
  ngOnInit(): void {
    this.getWeather();
  }
  
  
  getWeather() {
    this.weatherService.getweather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
         
        this.Cold = this.weatherData.main.temp <= 10 && this.weatherData.main.temp > 5;
        this.tooCold = this.weatherData.main.temp <= 5;
        
        this.Hot = this.weatherData.main.temp >= 20 && this.weatherData.main.temp < 35;
        this.tooHot = this.weatherData.main.temp >= 35;

        this.Humid = this.weatherData.main.humidity > 40;

        if (this.weatherData.rain) {
        this.Rainy = this.weatherData.rain['1h'] >= 2 && this.weatherData.rain['1h'] <= 10;
        this.tooRainy = this.weatherData.rain['1h'] > 30;
        } else {
        this.Rainy = false;
        this.tooRainy = false;
        }
        
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
