import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ForecastService } from "../forecast.service";
import { NotificationsService } from "src/app/notifications/notifications.service";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.css"],
})
export class ForecastComponent implements OnInit {
  forecast$: Observable<{ dateString: string; temp: number }[]>;
  constructor(
   private forecastService: ForecastService,
  private notificationsService: NotificationsService
  ) {
    this.forecast$ = forecastService.getForecast();
  }

  ngOnInit() {}

  onMouseOver(weatherDataEvent: { dateString: string; temp: number }): void {
    
    console.log("Mouse over event:", weatherDataEvent);
    if (25 < weatherDataEvent.temp && weatherDataEvent.temp < 30) {
    this.notificationsService.addSuccess(
     `it is predicted that weather is quite fair at ${weatherDataEvent.temp}°C on day ${weatherDataEvent.dateString}` 
    );
    //You can add more logic here if needed
  }
}
}
