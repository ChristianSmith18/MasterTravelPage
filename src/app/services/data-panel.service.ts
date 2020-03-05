import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { dataInfo, Mensaje } from './data-info.interface';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DataPanelService {

  constructor(
    private database: AngularFirestore
  ) { }

  getAllData() {
    return this.database.collection('dashboard').doc('allData').valueChanges();
  }

  setMantencionState(state: boolean) {
    this.database.collection('dashboard').doc('allData').set({
      mantencionMode: state
    }, { merge: true });
  }

  setFacebookCount(data: number) {
    this.database.collection('dashboard').doc('allData').set({
      facebook: data
    }, { merge: true });
  }
  setInstagramCount(data: number) {
    this.database.collection('dashboard').doc('allData').set({
      instagram: data
    }, { merge: true });
  }
  setTwitterCount(data: number) {
    this.database.collection('dashboard').doc('allData').set({
      twitter: data
    }, { merge: true });
  }
  setWhatsappCount(data: number) {
    this.database.collection('dashboard').doc('allData').set({
      whatsapp: data
    }, { merge: true });
  }




  setVisitasCount(data: number) {
    this.database.collection('dashboard').doc('allData').set({
      visitas: data
    }, { merge: true });

  }
  setVisitasContactoCount(data: number) {
    this.database.collection('dashboard').doc('allData').set({
      visitasContacto: data
    }, { merge: true });

  }
  setVisitasOtrosCount(data: number) {
    this.database.collection('dashboard').doc('allData').set({
      visitasOtros: data
    }, { merge: true });

  }
  setVisitasSalidasCount(data: number) {
    this.database.collection('dashboard').doc('allData').set({
      visitasSalidas: data
    }, { merge: true });
  }


  activateVisto(index: number) {
    let key = true;

    this.getAllData().subscribe(
      (data: dataInfo) => {
        if (key) {
          const dataSet = data;
          dataSet.mensajesContacto[index].visto = true;
          this.database.collection('dashboard').doc('allData').set({
            mensajesContacto: data.mensajesContacto
          }, { merge: true });
          key = false;
        }
      });
  }

  unactivateVisto(index: number) {
    let key = true;

    this.getAllData().subscribe(
      (data: dataInfo) => {
        if (key) {
          const dataSet = data;
          dataSet.mensajesContacto[index].visto = false;
          this.database.collection('dashboard').doc('allData').set({
            mensajesContacto: data.mensajesContacto
          }, { merge: true });
          key = false;
        }
      });
  }

  sendMsgFromContactPage(nombre: string, email: string, numeroTelefonico: string, mensaje: string, empresa?: string) {
    const day = new Date().getDate().toString();
    const month = (new Date().getMonth() + 1).toString();
    const year = new Date().getFullYear().toString().substring(2);
    let passData: Mensaje;
    if (isNullOrUndefined(empresa)) {
      passData = {
        email,
        fecha: `${day}/${month}/${year}`,
        mensaje,
        nombre,
        numeroTelefonico,
        visto: false,
      };
    } else {
      passData = {
        email,
        fecha: `${day}/${month}/${year}`,
        mensaje,
        nombre,
        numeroTelefonico,
        visto: false,
        empresa
      };
    }

    let key = true;

    this.getAllData().subscribe(
      (data: dataInfo) => {
        if (key) {
          const dataSet = data;
          dataSet.mensajesContacto.unshift(passData);
          this.database.collection('dashboard').doc('allData').set({
            mensajesContacto: dataSet.mensajesContacto
          }, { merge: true });
          key = false;
        }
      }
    );
  }
}
