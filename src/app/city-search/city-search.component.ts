import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.scss'
})
export class CitySearchComponent {

  city = new FormControl('');
  weatherData: WeatherData | null = null;
  errorMessage: string | null = null;

  constructor(private weatherService: WeatherService) {}

  searchCity() {
    const city = this.city.value;
    if (city) {
      this.weatherService.getWeather(city.trim()).subscribe(
        data => {
          this.weatherData = data;
          this.errorMessage = null;
        },
        error => {
          this.errorMessage = 'Failed to load weather data';
          console.error('Failed to load weather data:', error);
        }
      );
    } else {
      console.log('No city entered'); 
    }
  }
}
