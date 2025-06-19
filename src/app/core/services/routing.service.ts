import {Injectable, NgZone} from '@angular/core';
import {Router} from "@angular/router";
import {HandleErrorService} from "../exceptions/handle-error.service";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private handleErrorService: HandleErrorService
  ) { }

  navigateByUrl(url: string) {
    this.ngZone.run(() => {
      this.router.navigateByUrl(url)
        .then((success: boolean) => {
          if (success) {
            console.log('Navigation was successful');
          } else {
            console.log('Navigation has failed');
          }
        })
        .catch(error => {
          console.log('Navigation error: ', error.message);
          this.handleErrorService.handleError(error);
        })
    })
  }

  navigate(url: string) {
    this.ngZone.run(() => {
      this.router.navigate([url])
        .then((success: boolean) => {
          if (success) {
            console.log('Navigation was successful');
          } else {
            console.log('Navigation has failed');
          }
        })
        .catch(error => {
          console.log('Navigation error: ', error.message);
          this.handleErrorService.handleError(error);
        })
    })
  }

}
