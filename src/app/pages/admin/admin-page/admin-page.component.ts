import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { isNullOrUndefined } from 'util';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  autenticado = false;
  correo = '';
  clave = '';
  spinner = false;
  private contSetPassToText = true;
  passText = 'password';

  constructor(
    private auth: AngularFireAuth,
    private title: Title
  ) {
    this.title.setTitle('Panel de Administración');
    this.auth.authState.subscribe((state) => {
      if (isNullOrUndefined(state)) {
        this.autenticado = false;
      } else {
        this.autenticado = true;
      }
    });
  }

  signIn() {
    this.spinner = true;
    this.passText = 'password';
    this.contSetPassToText = true;
    this.auth.auth.signInWithEmailAndPassword(this.correo, this.clave)
      .then(() => {
        this.spinner = false;
        this.createAlert('Ingresado correctamente!', 'success');
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
            this.createAlert('Formato de correo inválido.', 'warning');
            break;
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            this.createAlert('Usuario o contraseña incorrectos.', 'warning');
            break;
        }
        this.spinner = false;
      });
  }

  setPassToText() {
    this.contSetPassToText = !this.contSetPassToText;
    if (this.contSetPassToText) {
      this.passText = 'password';
    } else {
      this.passText = 'text';
    }
  }

  private createAlert(msg: string, type: string) {
    const alert = document.createElement('div');
    alert.id = `div-alert`;
    alert.innerHTML = `
    <div class="uk-alert-${type} uk-animation-shake" uk-alert>
      <a class="uk-alert-close" uk-close></a>
      <p>${msg}</p>
    </div>
    `;
    document.body.appendChild(alert);
    setTimeout(() => {
      document.body.removeChild(alert);
    }, 3000);
  }
}
