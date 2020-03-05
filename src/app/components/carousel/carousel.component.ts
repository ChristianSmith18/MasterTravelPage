import { Component, AfterContentChecked } from '@angular/core';
import TypeIt from 'typeit';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterContentChecked {
  keyAfterContentChecked = true;

  constructor() { }

  ngAfterContentChecked() {
    if (this.keyAfterContentChecked) {
      const instance = new TypeIt('#element-type-writter', {
        strings: ['Si tienes algún destino soñado, no lo busques más, Master Travel, es parte de tus sueños y te lo hacemos realidad.'],
        speed: 30,
        waitUntilVisible: true
      }).go();
      this.keyAfterContentChecked = false;
    }
  }

}
