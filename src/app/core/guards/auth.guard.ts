import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {CookiesService} from "../../features/shared/storage/cookies.service";
import {RoutingService} from "../services/routing.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(
    private cookiesService: CookiesService,
    private router: Router,
    private notificationService: NzNotificationService,
    private routingService: RoutingService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.cookiesService.getCookie('token')) {
      return true;
    } else {
      this.notificationService.create(
        'error',
        'Unauthenticated',
        'You are not authorised to access ' + state.url,
        {nzDuration: 15000}
      );
      this.routingService.navigateByUrl('/');
      return false
    }
  }
}
