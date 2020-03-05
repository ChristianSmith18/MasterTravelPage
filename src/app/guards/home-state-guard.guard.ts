import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataPanelService } from '../services/data-panel.service';
import { map } from 'rxjs/operators';
import { dataInfo } from '../services/data-info.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeStateGuardGuard implements CanActivate {

  constructor(
    private database: DataPanelService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.database.getAllData().pipe(
      map((data: dataInfo) => {
        if (data.mantencionMode) {
          this.router.navigate(['mantencion-page']);
          return false;
        } else {
          return true;
        }
      })
    );
  }

}
