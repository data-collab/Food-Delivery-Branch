import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapComponent } from '../../shared/google-map/google-map.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, GoogleMapComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  latitude: number = 41.7151; // Replace with your latitude
  longitude: number = 44.8271; // Replace with your longitude
  zoom: number = 15; // Adjust zoom level for visibility
  email: string = 'infolunchline@gmail.com';
}
