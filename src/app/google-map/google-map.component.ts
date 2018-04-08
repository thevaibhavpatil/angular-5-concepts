import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  marker: any;
  map: any;
  currentLong: any;
  currentLat: any;
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
    this.findMe()
  }
  mapClicked(e){
    console.log('e', e)
    this.lat = e.coords.lat;
    console.log('this.lat', this.lat)
    this.lng = e.coords.lng;
    console.log('this.lng', this.lng)
  }
  findMe() {
    if (navigator.geolocation) {
      console.log('navigator.geolocation', navigator.geolocation)
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('position', position)
        console.log('navigator.geolocation', navigator.geolocation)
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        // this.showPosition(position);
      }, error => {
        console.log('error', error)
      });
      console.log('navigator.geolocation', navigator.geolocation)
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  /*  showPosition(position) {
     this.currentLat = position.coords.latitude;
     this.currentLong = position.coords.longitude;
 
     let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     this.map.panTo(location);
 
     if (!this.marker) {
       this.marker = new google.maps.Marker({
         position: location,
         map: this.map,
         title: 'Got you!'
       });
     }
     else {
       this.marker.setPosition(location);
     }
   }
  */

}
