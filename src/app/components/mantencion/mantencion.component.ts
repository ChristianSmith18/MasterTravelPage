import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mantencion',
  templateUrl: './mantencion.component.html',
  styleUrls: ['./mantencion.component.scss']
})
export class MantencionComponent {

  constructor() {
    document.getElementsByTagName('html')[0].style.backgroundColor = '#282c34';
  }

  sendUrl() {
    window.location.href = 'https://mastertravel.cl/';
  }

}
