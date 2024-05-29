import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl: string = 'http://api.weatherapi.com/v1'; // Example endpoint
  private apiKey: string = 'a82b349427a6492490a134703242905';

  
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', city)
      .set('days', '3'); // Adjust 'days' based on the forecast length you need

    return this.http.get(`${this.baseUrl}/forecast.json`, { params });
  }


  getWeatherForecast(days: number): Observable<any> {
    // Assuming your API allows fetching weather by location (latitude/longitude)
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', 'auto:ip') // Replace with your method of getting the location
      .set('days', days.toString());

    return this.http.get(`${this.baseUrl}/forecast.json`, { params });
  }
}
