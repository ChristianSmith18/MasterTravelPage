import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogoPageComponent } from './pages/home/catalogo-page/catalogo-page.component';
import { OtrosDestinosPageComponent } from './pages/home/otros-destinos-page/otros-destinos-page.component';
import { SalidasConfirmadasPageComponent } from './pages/home/salidas-confirmadas-page/salidas-confirmadas-page.component';
import { ContactoPageComponent } from './pages/home/contacto-page/contacto-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { PhoneInstaComponent } from './components/phone-insta/phone-insta.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/map/map.component';
import { PanelComponent } from './components/panel/panel.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MensajesComponent } from './components/admin/mensajes/mensajes.component';
import { PaquetesComponent } from './components/admin/paquetes/paquetes.component';
import { MantencionComponent } from './components/mantencion/mantencion.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    HomePageComponent,
    NavbarComponent,
    CatalogoPageComponent,
    OtrosDestinosPageComponent,
    SalidasConfirmadasPageComponent,
    ContactoPageComponent,
    CarouselComponent,
    CardsComponent,
    PhoneInstaComponent,
    FooterComponent,
    MapComponent,
    PanelComponent,
    DashboardComponent,
    MensajesComponent,
    PaquetesComponent,
    MantencionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
