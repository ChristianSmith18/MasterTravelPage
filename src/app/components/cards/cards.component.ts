import { Component, AfterContentChecked } from '@angular/core';
import platform from 'platform';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements AfterContentChecked {

  iosDevice = false;
  keyAfterContentChecked = true;

  constructor() {
    if (platform.os.family === 'OS X' || platform.os.family === 'iOS') {
      this.iosDevice = true;
    }
  }

  ngAfterContentChecked() {
    if (this.keyAfterContentChecked) {
      setTimeout(() => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < document.getElementsByClassName('img-card-details').length; i++) {
          // tslint:disable-next-line: max-line-length
          document.getElementsByClassName('img-card-details')[i].setAttribute('uk-slideshow', `animation: scale;autoplay: true; autoplay-interval: 2500; min-height: ${window.innerHeight}`);
          this.keyAfterContentChecked = false;
        }
      }, 700);
    }
  }

  onImageLoad(event: any, id: string) {
    (event.path[0] as HTMLImageElement).style.display = '';
    document.getElementById(id).style.display = 'none';
  }

}
