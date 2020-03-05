import { Component } from '@angular/core';
import { DataPanelService } from 'src/app/services/data-panel.service';
import { dataInfo, Mensaje } from 'src/app/services/data-info.interface';

declare var UIkit: any;

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent {
  mensajes: Mensaje[];
  lectura = 0;
  ancho = 0;

  constructor(
    private database: DataPanelService
  ) {
    this.ancho = window.innerWidth;
    this.database.getAllData().subscribe(
      (data: dataInfo) => {
        this.mensajes = data.mensajesContacto;
      }
    );
  }

  readMsg(index: number) {
    this.lectura = index;
    const element = document.getElementById('my-modal');
    UIkit.modal(element).show();
  }

  sendEmail() {
    window.location.href = `mailto:${this.mensajes[this.lectura].email}
    ?subject=
    Respuesta de MASTER TRAVEL a Sr(a) ${this.mensajes[this.lectura].nombre.toUpperCase()}
    &body=
    <p stye="color: blue !important;">En respuesta a: "<i>${this.mensajes[this.lectura].mensaje}</i>"</p>
    <br>

    `;

    this.database.activateVisto(this.lectura);
  }

  unRead() {
    this.database.unactivateVisto(this.lectura);
  }
}
