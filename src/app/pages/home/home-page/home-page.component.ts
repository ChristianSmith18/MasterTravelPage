import { Component, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataPanelService } from 'src/app/services/data-panel.service';
import { dataInfo } from 'src/app/services/data-info.interface';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterContentChecked {

  keyAfterContentChecked = true;

  constructor(
    private title: Title,
    private database: DataPanelService
  ) {
    this.title.setTitle('Página de Inicio');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 650) {
        document.getElementById('button-up').style.display = '';
      } else {
        document.getElementById('button-up').style.display = 'none';
      }
    });

    let key = true;
    this.database.getAllData().subscribe(
      (data: dataInfo) => {
        if (key) {
          this.database.setVisitasCount(data.visitas + 1);
          key = false;
        }
      }
    );
  }

  ngAfterContentChecked() {
    if (this.keyAfterContentChecked) {
      if (window.scrollY >= 650) {
        document.getElementById('button-up').style.display = '';
      } else {
        document.getElementById('button-up').style.display = 'none';
      }
      this.keyAfterContentChecked = false;
    }
  }
}
