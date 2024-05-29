import { Routes } from '@angular/router';
import { CitySearchComponent } from './city-search/city-search.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';


export const routes: Routes = [
    { path: '', redirectTo: '/city-search', pathMatch: 'full' },
    { path: 'city-search', component: CitySearchComponent },
    { path: 'weather-display', component: WeatherDisplayComponent }
];
