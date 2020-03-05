import { Component } from '@angular/core';
import { UsdIndicadorService } from '../../../services/usd-indicador.service';
import { USD } from 'src/app/services/usd.interface';
import { DataPanelService } from 'src/app/services/data-panel.service';
import { dataInfo } from 'src/app/services/data-info.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  dolarObservado = 0.0;
  day = 'dd';
  month = 'mm';
  year = 'yyyy';
  mantencionMode = false;

  // DataInfo
  facebookData = 0;
  instagramData = 0;
  twitterData = 0;
  whatsappData = 0;
  visitasData = 0;
  visitasContactoData = 0;
  visitasOtrosData = 0;
  visitasSalidasData = 0;

  constructor(
    private usd: UsdIndicadorService,
    private database: DataPanelService
  ) {
    this.usd.getUSDIndicator().subscribe(
      (data: USD) => {
        if (data.serie.length !== 0) {
          this.dolarObservado = data.serie[0].valor;
          this.day = (data.serie[0].fecha + '').split('-')[2].split('T')[0];
          this.month = (data.serie[0].fecha + '').split('-')[1];
          this.year = (data.serie[0].fecha + '').split('-')[0];
        }
      },
      err => {
        console.warn('Error: ' + err);
      }
    );

    this.database.getAllData().subscribe(
      (info: dataInfo) => {
        this.facebookData = info.facebook;
        this.instagramData = info.instagram;
        this.twitterData = info.twitter;
        this.whatsappData = info.whatsapp;
        this.visitasData = info.visitas;
        this.visitasContactoData = info.visitasContacto;
        this.visitasOtrosData = info.visitasOtros;
        this.visitasSalidasData = info.visitasSalidas;
        this.mantencionMode = info.mantencionMode;
      }
    );
  }

  setMantencionMode() {
    this.database.setMantencionState(!this.mantencionMode);
  }
}
