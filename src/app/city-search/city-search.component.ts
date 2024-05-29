import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
import { WeatherService } from '../services/weather.service';



@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.scss'
})
export class CitySearchComponent {

  city = new FormControl('');

  constructor(private weatherService: WeatherService) {}

  searchCity() {
    const city = this.city.value;
    if (city) {
      this.weatherService.getWeather(city.trim()).subscribe(
        data => {
          console.log('Weather data:', data); // Handle data here, perhaps update the view or a model
        },
        error => {
          console.error('Failed to load weather data:', error); // Handle errors here
        }
      );
    } else {
      console.log('No city entered'); // Optionally handle the empty input case
    }
  }
}
