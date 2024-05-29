export interface WeatherData {
    location: {
      name: string;
      region: string;
      country: string;
      lat: number;
      lon: number;
      tz_id: string;
      localtime_epoch: number;
      localtime: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
      wind_kph: number;
      humidity: number;
      cloud: number;
      feelslike_c: number;
    };
    forecast: {
      forecastday: Array<{
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          avgtemp_c: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
        };
      }>;
    };
  }