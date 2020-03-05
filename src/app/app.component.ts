import { Component } from '@angular/core';
import { UsdIndicadorService } from '../app/services/usd-indicador.service';

import { USD } from '../app/services/usd.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dolarObservado = 0.0;
  showUSDIndicator = true;
  constructor(
    private usd: UsdIndicadorService
  ) {
    if (window.location.pathname.split('/')[1] === 'admin') {
      document.getElementsByTagName('html')[0].style.background = '#282c34';
      this.showUSDIndicator = false;
    }

    this.usd.getUSDIndicator().subscribe(
      (data: USD) => {
        this.dolarObservado = data.serie[0].valor;
      },
      err => {
        console.warn('Error: ' + err);
      }
    );
  }
}
