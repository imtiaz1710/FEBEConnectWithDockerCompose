import { JsonPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data: [] = [];
  constructor(private http: HttpClient) {
    http.get('http://localhost:8888/WeatherForecast').subscribe({
      next: (res: any) => {
        this.data = res;
      }
    });
  }
  title = 'Farm2MarketWeb';
}
