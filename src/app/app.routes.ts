import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LiveMarketComponent } from './live-market/live-market.component';
import { HistoricalDataComponent } from './historical-data/historical-data.component';
import { PredictionsComponent } from './predictions/predictions.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'live-market', component: LiveMarketComponent },
    { path: 'historical-data', component: HistoricalDataComponent },
    { path: 'predictions', component: PredictionsComponent }
];
