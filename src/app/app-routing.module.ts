import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { CatalogoPageComponent } from './pages/home/catalogo-page/catalogo-page.component';
import { OtrosDestinosPageComponent } from './pages/home/otros-destinos-page/otros-destinos-page.component';
import { SalidasConfirmadasPageComponent } from './pages/home/salidas-confirmadas-page/salidas-confirmadas-page.component';
import { ContactoPageComponent } from './pages/home/contacto-page/contacto-page.component';
import { MantencionComponent } from './components/mantencion/mantencion.component';
import { MantencionStateGuardGuard } from './guards/mantencion-state-guard.guard';
import { HomeStateGuardGuard } from './guards/home-state-guard.guard';


const routes: Routes = [
  { path: 'admin', component: AdminPageComponent },
  { path: 'mantencion-page', component: MantencionComponent, canActivate: [ MantencionStateGuardGuard ] },
  { path: 'home', component: HomePageComponent, canActivate: [ HomeStateGuardGuard ] },
  { path: 'catalogo', component: CatalogoPageComponent, canActivate: [ HomeStateGuardGuard ] },
  { path: 'otros-destinos', component: OtrosDestinosPageComponent, canActivate: [ HomeStateGuardGuard ] },
  { path: 'salidas-confirmadas', component: SalidasConfirmadasPageComponent, canActivate: [ HomeStateGuardGuard ] },
  { path: 'contacto', component: ContactoPageComponent, canActivate: [ HomeStateGuardGuard ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
