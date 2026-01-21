import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {PosmanMerchantOnboarding} from "./posman-merchant-onboarding";
import {NgForOf} from "@angular/common";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {PosmanMerchantOnboardingService} from "../../services/posman-merchant-onboarding.service";

@Component({
  selector: 'app-posman-merchant-onboarding',
  imports: [
    FormsModule,
    NgForOf,
    NzOptionComponent,
    NzSelectComponent
  ],
  templateUrl: './posman-merchant-onboarding.component.html',
  standalone: true,
  styleUrl: './posman-merchant-onboarding.component.scss'
})
export class PosmanMerchantOnboardingComponent {

  pos = signal(new PosmanMerchantOnboarding());

  selectedFile: File | null = null;

  constructor(private posRequestService: PosmanMerchantOnboardingService, private router: Router ) {
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('File selected:', file.name);
    }
  }

  savePosRequest(){

  }

  goToLandingPage(){
    this.router.navigate(['/create-posRequest']).then((data) => {
      console.log('Navigation complete!',data);
    });
  }

  onSubmit(){
    console.log(this.pos());
    this.savePosRequest()

  }

  currency = [
    "ZWG",
    "USD",
    "ZWG & USD",
    "ZAR"
  ]


}
