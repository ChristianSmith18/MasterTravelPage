import { Component } from '@angular/core';
import { DataPanelService } from 'src/app/services/data-panel.service';
import { dataInfo } from 'src/app/services/data-info.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'phone-insta',
  templateUrl: './phone-insta.component.html',
  styleUrls: ['./phone-insta.component.scss']
})
export class PhoneInstaComponent {

  constructor(
    private database: DataPanelService
  ) { }

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
}
