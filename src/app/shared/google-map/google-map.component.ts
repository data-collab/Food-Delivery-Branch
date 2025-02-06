import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  standalone: true,
  template: `<div id="map" style="width: 100%; height: 400px;"></div>`,
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @Input() latitude: number = 41.708998; // Default latitude
  @Input() longitude: number = 44.731803; // Default longitude
  @Input() zoom: number = 15;
  map!: google.maps.Map;


  ngOnInit(): void {
    if (typeof google !== 'undefined' && google.maps) {
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: { lat: this.latitude, lng: this.longitude },
          zoom: 12,
        }
      );
    } else {
      console.error('Google Maps API is not loaded.');
    }
  }
  ngAfterViewInit(): void {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: this.zoom,
    };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );
  }
}
