import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { Motion, MotionOrientationEventResult } from '@capacitor/motion';
import { Plugins } from '@capacitor/core';

import { Share } from '@capacitor/share';


@Component({
  selector: 'app-tokio',
  templateUrl: './tokio.page.html',
  styleUrls: ['./tokio.page.scss'],
})
export class TokioPage implements OnInit {
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
        const mapRef: any = document.getElementById('map5');

        this.newMap = await GoogleMap.create({
            id: 'my-map5', // Unique identifier for this map instance
            element: mapRef, // reference to the capacitor-google-map element
            apiKey: apiKey, // Your Google Maps API Key
            config: {
                center: {
                    // The initial position to be rendered by the map
                    lat: 20.697019,
            lng:  -103.359898,
            },
            zoom: 11.6, // The initial zoom level to be rendered by the map
            },
        });

        const markerId = await this.newMap.addMarker({
          coordinate: {
            lat: 20.708413,
            lng: -103.392319
          },
          tintColor:{
            r: 245, g: 117, b: 0, a: 0.8
          }
        }); //colomos


        const markerId2 = await this.newMap.addMarker({
          coordinate: {
            lat: 20.721178,
            lng: -103.393359
          },
          tintColor:{
            r:255 , g: 232, b: 29, a: 0.8
          }
        }); //Basilica zapopan


        const markerId3 = await this.newMap.addMarker({
          coordinate: {
            lat: 20.727603,
            lng: -103.382852
          },
          tintColor:{
            r: 0, g: 187, b: 29, a: 0.8
          }
        }); //estadio charros


        const markerId4 = await this.newMap.addMarker({
          coordinate: {
            lat: 20.732709,
            lng:  -103.380703
          },
          tintColor:{
            r: 0, g: 208, b: 221, a: 0.8
          }
        }); // auditorio telmex


        const markerId5 = await this.newMap.addMarker({
          coordinate: {
            lat: 20.675091,
            lng:  -103.341754
          },
          tintColor:{
            r: 37, g: 104, b: 244, a: 0.8
          }
        }); // plaza del mariachi

        const markerId6 = await this.newMap.addMarker({
          coordinate: {
            lat: 20.668957,
            lng:  -103.333292
          },
          tintColor:{
            r: 119, g: 0, b: 215, a: 0.8
          }
        });  // museo fuerza aerea

        const markerId7 = await this.newMap.addMarker({
          coordinate: {
            lat: 20.677123,
            lng: -103.346524
          },
          tintColor:{
            r: 189, g: 11, b: 159, a: 0.8
          }
        }); // catedral gdl

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