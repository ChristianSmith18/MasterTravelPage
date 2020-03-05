import { Component, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataPanelService } from 'src/app/services/data-panel.service';
import { dataInfo } from 'src/app/services/data-info.interface';

@Component({
  selector: 'app-contacto-page',
  templateUrl: './contacto-page.component.html',
  styleUrls: ['./contacto-page.component.scss']
})
export class ContactoPageComponent implements AfterContentChecked {
  keyAfterContentChecked = true;
  name = '';
  mail = '';
  mobile = '';
  enterprise = '';
  msg = '';

  constructor(
    private title: Title,
    private database: DataPanelService
  ) {
    this.title.setTitle('Contacto');
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
          this.database.setVisitasContactoCount(data.visitasContacto + 1);
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

  validateAll() {
    if (this.name.replace(/\s/g, '').length === 0) {
      document.getElementById('name').classList.add('alert-input');
      document.getElementById('name').setAttribute('uk-tooltip', 'title: Nombre inválido;');
      return;
    } else {
      document.getElementById('name').classList.remove('alert-input');
      document.getElementById('name').removeAttribute('uk-tooltip');
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.mail)) {
      document.getElementById('mail').classList.remove('alert-input');
      document.getElementById('mail').removeAttribute('uk-tooltip');
    } else {
      document.getElementById('mail').classList.add('alert-input');
      document.getElementById('mail').setAttribute('uk-tooltip', 'title: Correo inválido;');
      return;
    }

    if ((this.mobile.length < 9 || this.mobile.length > 10) || !this.mobile.match(/^-{0,1}\d+$/)) {
      document.getElementById('mobile').classList.add('alert-input');
      document.getElementById('mobile').setAttribute('uk-tooltip', 'title: Número inválido;');
      return;
    } else {
      document.getElementById('mobile').classList.remove('alert-input');
      document.getElementById('mobile').removeAttribute('uk-tooltip');
    }

    if (this.msg.replace(/\s/g, '').length === 0 || this.msg.length > 400) {
      document.getElementById('msg').classList.add('alert-input');
      document.getElementById('msg').setAttribute('uk-tooltip', 'title: Mensaje inválido;');
      return;
    } else {
      document.getElementById('msg').classList.remove('alert-input');
      document.getElementById('msg').removeAttribute('uk-tooltip');
    }

    if (this.enterprise.length !== 0) {
      this.database.sendMsgFromContactPage(this.name, this.mail, ('+56' + this.mobile), this.msg, this.enterprise);
    } else {
      this.database.sendMsgFromContactPage(this.name, this.mail, ('+56' + this.mobile), this.msg);
    }

    this.name = '';
    this.mail = '';
    this.mobile = '';
    this.enterprise = '';
    this.msg = '';
  }
}
