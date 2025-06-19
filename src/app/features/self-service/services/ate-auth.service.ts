import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AteAuthService {

  constructor(
      private http: HttpClient,
    ) { }
  
    accessTokenResponse$ = new Subject();
    resendOTPResponse$ = new Subject();
    accEnquiryResponse$ = new Subject();
  
    getAccessToken(req: any) {
      let params = new HttpParams();
      Object.keys(req).forEach(key => {
        params = params.append(key, req[key]);
      });
      this.http.post(MOBILE_BANKING_SERVICE_URL + 'auth/v2/2fa/sign-in', {}, { params }).subscribe((res: any) => {
        this.accessTokenResponse$.next(res);
      })
    }

    accountEnquiry(req: any) {
      this.http.post(ACC_ENQ_URL + 'account-enquiry', req, ).subscribe((res: any) => {
        this.accEnquiryResponse$.next(res);
      })
    }

    resendOTP(req: any) {
      this.http.post(MOBILE_BANKING_SERVICE_URL + 'auth/v1/otp/resend/' + req, {}).subscribe((res: any) => {
        this.accessTokenResponse$.next(res);
      })
    }


}
