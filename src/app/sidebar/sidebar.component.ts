import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatAnchor} from '@angular/material/button';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatAnchor, MatDrawer, MatDrawerContainer, NgOptimizedImage, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {}
