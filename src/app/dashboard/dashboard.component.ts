import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from '@angular/material/icon';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, MatCardModule, MatMenuModule, MatTableModule, MatButton, NgOptimizedImage, MatIcon, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  stats = [
    { title: 'Estadísticas', subtitle: 'Últimos 15 días', icon: '/chart.png' },
    { title: 'Medicamentos consumidos', subtitle: 'Últimos 15 días', icon: '/medicine.png' }
  ];

  medications = [
    { name: 'Acetaminofén', consumed: 15, adherence: '100%' },
    { name: 'Losartan', consumed: 10, adherence: '67%' },
    { name: 'Insulina', consumed: 15, adherence: '100%' }
  ];

  view: [number, number] = [400, 300]; // Tamaño del gráfico
  pieData = [
    { name: 'Tomados', value: 70 },
    { name: 'Omitidos', value: 30 }
  ];

  colorScheme: any = {
    domain: ['#003729', '#699b88']
  };


}
