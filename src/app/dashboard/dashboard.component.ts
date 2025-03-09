import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    CommonModule,
    SidebarComponent,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  chartData: ChartData<'pie'> = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [{ data: [10, 20, 30, 15, 25, 35], backgroundColor: ['#1E88E5', '#D32F2F', '#388E3C', '#FBC02D', '#8E24AA', '#FF5722'] }]
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  };
}
