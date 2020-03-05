import { Component, AfterContentChecked } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
declare var mapboxSdk;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterContentChecked {
  keyAfterContentChecked = true;

  constructor() { }

  ngAfterContentChecked() {
    if (this.keyAfterContentChecked) {
      mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aWFuc21pdGgxOSIsImEiOiJjazN3Zm9tY3gwbTcxM2xtZmt3a3hjeDZ5In0.-O4EJuprbRHdjrDfR52j_w';
      const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
      const ubicacion = 'Av. Nueva Providencia 1881';

      mapboxClient.geocoding.forwardGeocode({
        query: `${ubicacion}, Chile`,
        autocomplete: false,
        limit: 1
      }).send()
        .then((response: any) => {
          if (response && response.body && response.body.features && response.body.features.length) {
            const feature = response.body.features[0];

            const map = new mapboxgl.Map({
              container: 'mymap',
              style: 'mapbox://styles/mapbox/outdoors-v11',
              center: feature.center,
              zoom: 16
            });
            new mapboxgl.Marker()
              .setLngLat(feature.center)
              .addTo(map);
            map.addControl(new mapboxgl.NavigationControl());
            document.getElementsByClassName('mapboxgl-marker')[0].setAttribute('uk-tooltip', `${ubicacion}`);
            document.getElementsByClassName('mapboxgl-ctrl-zoom-in')[0].innerHTML = '<span uk-icon="plus"></span>';
            document.getElementsByClassName('mapboxgl-ctrl-zoom-out')[0].innerHTML = '<span uk-icon="minus"></span>';
            document.getElementsByClassName('mapboxgl-ctrl-compass')[0].innerHTML = '<span uk-icon="location"></span>';

          }
        });
      this.keyAfterContentChecked = false;
    }
  }
}
