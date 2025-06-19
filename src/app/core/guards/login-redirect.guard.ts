import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {CookiesService} from "../../features/shared/storage/cookies.service";
import {RoutingService} from "../services/routing.service";

@Injectable({
  providedIn: 'root'
})
export class LoginRedirectGuard implements CanActivate{
  constructor(
    private cookiesService: CookiesService,
    private router: Router,
    private notificationService: NzNotificationService,
    private routingService: RoutingService) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.cookiesService.getCookie('token')) {
      this.notificationService.create(
        'info',
        'Authenticated',
        'You are currently logged in',
        {nzDuration: 5000}
      );
      this.routingService.navigateByUrl('/authorise');
      return false
    } else {
      return true;
    }
  }
}
