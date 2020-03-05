import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataPanelService } from '../services/data-panel.service';
import { map } from 'rxjs/operators';
import { dataInfo } from '../services/data-info.interface';


@Injectable({
  providedIn: 'root'
})
export class MantencionStateGuardGuard implements CanActivate {

  constructor(
    private database: DataPanelService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.database.getAllData().pipe(
      map((data: dataInfo) => {
        if (data.mantencionMode) {
          return true;
        } else {
          this.router.navigate(['home']);
          return false;
        }
      })
    );
  }

}
