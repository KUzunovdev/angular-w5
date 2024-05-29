import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.scss'
})
export class WeatherDisplayComponent  implements OnInit{
  weatherData: WeatherData | null = null;
  errorMessage: string | null = null;
  days: number = 7; // Default to 7 days

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const daysParam = params['days'];
      this.days = daysParam ? +daysParam : 7;
      this.getWeatherData();
    });
  }

  getWeatherData() {
    this.weatherService.getWeatherForecast(this.days).subscribe(
      data => {
        this.weatherData = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = 'Failed to load weather data';
        console.error('Failed to load weather data:', error);
      }
    );
  }

  changeForecastDays(days: number) {
    this.days = days;
    this.getWeatherData();
  }
}
