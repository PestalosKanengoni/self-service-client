import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHeaders,
  HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookiesService } from "../../features/shared/storage/cookies.service";

export function httpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const token = inject(CookiesService).getCookie('token');

  console.log("🌐 HTTP Request Intercepted");
  console.log(`Request before formatting: ${req}`);

  // Get the request URL
  const url = req.url; 

  let headers = new HttpHeaders()
    .set('x-gateway-origin', 'client')
    .set('x-authorise-admin', 'admin@authorise.net')
    .set('Access-Control-Allow-Origin', '*');

  // Check if the URL matches the 2FA sign-in endpoint
  if (url.includes('auth/v2/2fa/sign-in')) {
    headers = headers.set('Authorization', 'Basic ZGVmYXVsdC1jbGllbnQ6WXlrTXpJejFLY3RONW1DWXZtbWo=');
  } else {
    headers = headers.set('Authorization', 'Bearer ' + token);
  }

  if (url.includes('txn-banking/txn-agency-banking/tran-request/account-enquiry')) {
    headers = headers.set('API-KEY', ACC_API_KEY);
  }

  // Clone the request with updated headers
  req = req.clone({ headers });

  console.log(`Request after formatting: ${req}`);

  return next(req);
}
