import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AccountOpeningService } from '../../services/account-opening.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AteAuthService } from '../../services/ate-auth.service';
import { SubscriptionsManager } from '../../../../core/helpers/SubscriptionsManager';

@Component({
  selector: 'afc-link-login',
  templateUrl: './afc-link-login.component.html',
  styleUrl: './afc-link-login.component.scss'
})
export class AfcLinkLoginComponent implements OnInit, OnDestroy {
  @Output() loginComplete = new EventEmitter<any>();

  constructor(
    private accountOpeningService: AccountOpeningService,
          private notification: NzNotificationService,
          private ateAuthService: AteAuthService,
  ){}

  otpIsVisible = false;


  loginForm = {
    username: '',
    password: '',
    grant_type: 'password',
    otp: '',
    otpRef: ''
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  ngOnInit(): void {
    this.subs.add = this.ateAuthService.accessTokenResponse$.subscribe((res: any) => {
      this.onGetAccessTokenResponse(res);
    });
    this.subs.add = this.ateAuthService.resendOTPResponse$.subscribe((res: any) => {
      this.onResendOTPResponse(res);
    });
  }

  onResendOTPResponse(res: any) {
    if(res.id) {
      this.notification.create('success', 'Success', 'OTP sent successfully');
    } else {
      this.notification.create('error', 'Error', 'Error processing request');
    }
  }

  subs = new SubscriptionsManager();

  loginStage: number = 0;
  loanApplicationInputs = {
    pidNumber: '',
    mobileNumber: '',
    userId: '',
    userAccounts: [] as any[],
  }

  otpId?: any;

  onGetAccessTokenResponse(res: any) {
    console.log(this.loginStage)
    this.loginLoader = false;
    console.log(res);
    switch (this.loginStage){
      case 0:
        console.log("This is stage 0")
        if (res.otp) {
          this.notification.create('success', 'Success', 'Please enter the OTP sent to your mobile number');
          this.loginForm.otpRef = res.otpReference;
          this.loanApplicationInputs.userId = res.userId;
          this.otpId = res.id;
          this.loginStage = 1;
          this.otpIsVisible = true;
        } else if(res.error) {
          this.notification.create('error', res.error, res.error_description);
        }
        break;
      case 1:
        if (res.accessToken) {
          for (let account of res.accounts) {
            this.loanApplicationInputs.userAccounts.push({'number': account.accountNumber, 'currency': account.currency})
          }
          this.loanApplicationInputs.pidNumber = res.user.nationalId
          this.loanApplicationInputs.mobileNumber = res.user.msisdn
          this.loginStage=0;
          this.loginComplete.emit(this.loanApplicationInputs);
          //TODO: emit event
        } else if(res.error) {
          // this.notification.create('error', res.error, res.error_description);
          this.notification.create('error', 'Error', 'Error processing request');
        }
        break;
      default:
        this.notification.create('error', res.error, res.error_description);
          break; 
    }

  }

  loginLoader: boolean = false;

  authenticate() {
    this.loginLoader = true;
    let req = {
      username: 'MOBILE:' + this.loginForm.username,
      password: this.loginForm.password,
      grant_type: this.loginForm.grant_type,
      otp: this.loginForm.otp,
      otpRef: this.loginForm.otpRef
    }

    this.ateAuthService.getAccessToken(req)
  }

  resendOTP() {
    this.loginLoader = true;
    this.otpIsVisible = false;
    this.loginStage = 0;
    this.ateAuthService.resendOTP(this.otpId)
  }


}
