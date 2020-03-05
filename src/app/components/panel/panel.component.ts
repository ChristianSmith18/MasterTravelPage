import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataPanelService } from 'src/app/services/data-panel.service';
import { dataInfo } from 'src/app/services/data-info.interface';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  spinner = false;
  dashboard = true;
  mensajes = false;
  paquetes = false;

  msgUnread = 0;

  constructor(
    private auth: AngularFireAuth,
    private database: DataPanelService
  ) {
    this.database.getAllData().subscribe(
      (data: dataInfo) => {
        let cont = 0;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < data.mensajesContacto.length; i++) {
          if (!(data.mensajesContacto[i].visto)) {
            cont++;
          }
        }
        this.msgUnread = cont;
      }
    );
  }

  signOut() {
    this.spinner = true;

    setTimeout(() => {
      this.auth.auth.signOut().then(() => {
        this.spinner = false;
      });
    }, 700);
  }

  setShowApp(index: number) {
    switch (index) {
      case 1:
        document.getElementById('dashboard').classList.add('uk-active');
        document.getElementById('mensajes').classList.remove('uk-active');
        document.getElementById('paquete').classList.remove('uk-active');
        document.getElementById('listado').classList.remove('uk-active');
        this.dashboard = true;
        this.mensajes = false;
        this.paquetes = false;
        break;
      case 2:
        document.getElementById('dashboard').classList.remove('uk-active');
        document.getElementById('mensajes').classList.add('uk-active');
        document.getElementById('paquete').classList.remove('uk-active');
        document.getElementById('listado').classList.remove('uk-active');
        this.dashboard = false;
        this.mensajes = true;
        this.paquetes = false;
        break;
      case 3:
        document.getElementById('dashboard').classList.remove('uk-active');
        document.getElementById('mensajes').classList.remove('uk-active');
        document.getElementById('paquete').classList.add('uk-active');
        document.getElementById('listado').classList.remove('uk-active');
        this.dashboard = false;
        this.mensajes = false;
        this.paquetes = true;
        break;
      case 4:
        document.getElementById('dashboard').classList.remove('uk-active');
        document.getElementById('mensajes').classList.remove('uk-active');
        document.getElementById('paquete').classList.remove('uk-active');
        document.getElementById('listado').classList.add('uk-active');
        this.dashboard = false;
        this.mensajes = false;
        this.paquetes = true;
        break;
    }
  }
}
