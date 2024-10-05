import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { Motion, MotionOrientationEventResult } from '@capacitor/motion';
import { Plugins } from '@capacitor/core';

import { Share } from '@capacitor/share';


@Component({
  selector: 'app-washington',
  templateUrl: './washington.page.html',
  styleUrls: ['./washington.page.scss'],
})
export class WashingtonPage implements OnInit {
    gamma: number=0;
  alpha: number=0;
  beta: number=0;
  compassAngle: number=0;

  gammaCos:number=0;
  gammaSin: number=0;
  betaCos:number=0;
  betaSin: number=0;
  alphaCos:number=0;
  alphaSin: number=0;

  alphaRot: number=0;
  betaRot: number=0;
  gammaRot: number=0;


  constructor() { }newMap: any = null;
    async ngOnInit() {
        const apiKey = 'AIzaSyDozjIMizOcghj8l7epwn_Jm28VMMj--qY';
        const mapRef: any = document.getElementById('map6');

        this.newMap = await GoogleMap.create({
            id: 'my-map6', // Unique identifier for this map instance
            element: mapRef, // reference to the capacitor-google-map element
            apiKey: apiKey, // Your Google Maps API Key
            config: {
                center: {
                    // The initial position to be rendered by the map
                    lat: 38.894350,
            lng:  -77.033418,
            },
            zoom: 13, // The initial zoom level to be rendered by the map
            },
        });

        const markerId = await this.newMap.addMarker({
          coordinate: {
            lat: 38.897613,
            lng: -77.038591
          },
          tintColor:{
            r: 245, g: 117, b: 0, a: 0.8
          }
        }); //casa blanca


        const markerId2 = await this.newMap.addMarker({
          coordinate: {
            lat: 38.889100,
            lng: -77.008625
          },
          tintColor:{
            r:255 , g: 232, b: 29, a: 0.8
          }
        }); //capitolio


        const markerId3 = await this.newMap.addMarker({
          coordinate: {
            lat: 38.890530,
            lng: -77.019088
          },
          tintColor:{
            r: 0, g: 187, b: 29, a: 0.8
          }
        }); //national gallery of art


        const markerId4 = await this.newMap.addMarker({
          coordinate: {
            lat: 38.889424,
            lng: -77.034700
          },
          tintColor:{
            r: 0, g: 208, b: 221, a: 0.8
          }
        }); // monumento washington


        const markerId5 = await this.newMap.addMarker({
          coordinate: {
            lat: 38.889795,
            lng:  -77.049695
          },
          tintColor:{
            r: 37, g: 104, b: 244, a: 0.8
          }
        }); // monumento abraham lincoln


        const markerId6 = await this.newMap.addMarker({
          coordinate: {
            lat: 38.894752,
            lng: -77.046691
          },
          tintColor:{
            r: 119, g: 0, b: 215, a: 0.8
          }
        });  // departamento de estado

        const markerId7 = await this.newMap.addMarker({
          coordinate: {
            lat: 38.886596,
            lng: -77.033701
          },
          tintColor:{
            r: 189, g: 11, b: 159, a: 0.8
          }
        }); // memorial holocaust

    }

    async ubi(){
        const coordinates = await Geolocation.getCurrentPosition();

        const markerId = await this.newMap.addMarker({
          coordinate: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude
          }
        });

        const markerId2 = await this.newMap.addMarker({
          coordinate: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude
          }
        });


        const markerId3 = await this.newMap.addMarker({
          coordinate: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude
          }
        });


        const markerId4 = await this.newMap.addMarker({
          coordinate: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude
          }
        });


        const markerId5 = await this.newMap.addMarker({
          coordinate: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude
          }
        });


        const markerId6 = await this.newMap.addMarker({
          coordinate: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude
          }
        });


        const markerId7 = await this.newMap.addMarker({
          coordinate: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude
          }
        });
    }

    async motion() {
    Motion.addListener("orientation", event => {
        this.gamma=(event.gamma)* (Math.PI / 180);
        this.beta=(event.beta)* (Math.PI / 180);
        this.alpha=(event.alpha)* (Math.PI / 180);

        this.gammaCos=Math.cos(this.gamma);
        this.gammaSin=Math.sin(this.gamma);
        this.betaCos=Math.cos(this.beta);
        this.betaSin=Math.sin(this.beta);
        this.alphaCos=Math.cos(this.alpha);
        this.alphaSin=Math.sin(this.alpha);

        this.gammaRot=- this.betaCos * this.gammaCos;
        this.betaRot=- this.alphaSin * this.gammaSin + this.alphaCos * this.betaSin * this.gammaCos;
        this.alphaRot=- this.alphaCos * this.gammaSin - this.alphaSin * this.betaSin * this.gammaCos;

        this.compassAngle=Math.atan(this.alphaRot / this.betaRot);
        if(this.betaRot < 0) {
          this.compassAngle += Math.PI;
        }else if(this.alphaRot < 0) {
          this.compassAngle += 2 * Math.PI;
        }
        this.compassAngle*= 180 / Math.PI;
    });

  }

  async share() {
    const coordinates = await Geolocation.getCurrentPosition();
     Share.share({
      text: 'Esta es tu ubicacion: ' + '\n' + 'Latitude: ' + coordinates.coords.latitude + '\n' + 'Longitude: ' + coordinates.coords.longitude,
  });
}



  }