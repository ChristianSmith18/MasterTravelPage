import { Component } from '@angular/core';
import { DataPanelService } from 'src/app/services/data-panel.service';
import { dataInfo } from 'src/app/services/data-info.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  pathname = 'home';

  constructor(
    private database: DataPanelService
  ) {
    this.pathname = window.location.pathname.split('/')[1];
  }

  setUrl(path: string) {
    window.location.href = '/' + path;
  }

  addFacebook() {
    let key = true;
    this.database.getAllData().subscribe(
      (data: dataInfo) => {
        if (key) {
          this.database.setFacebookCount(data.facebook + 1);
          key = false;
        }
      }
    );
  }

  addTwitter() {
    let key = true;
    this.database.getAllData().subscribe(
      (data: dataInfo) => {
        if (key) {
          this.database.setTwitterCount(data.twitter + 1);
          key = false;
        }
      }
    );
  }

  addInstagram() {
    let key = true;
    this.database.getAllData().subscribe(
      (data: dataInfo) => {
        if (key) {
          this.database.setInstagramCount(data.instagram + 1);
          key = false;
        }
      }
    );
  }

  addWhatsapp() {
    let key = true;
    this.database.getAllData().subscribe(
      (data: dataInfo) => {
        if (key) {
          this.database.setWhatsappCount(data.whatsapp + 1);
          key = false;
        }
      }
    );
  }
}
