import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfcLogoLgComponent } from './components/logo/afc-logo-lg/afc-logo-lg.component';
import { AfcLogoMarkComponent } from './components/logo/afc-logo-mark/afc-logo-mark.component';
import { LoaderFullPageComponent } from './components/loader/loader-full-page/loader-full-page.component';
import {NzProgressComponent} from "ng-zorro-antd/progress";
import {NzAlertComponent} from "ng-zorro-antd/alert";
import { ButtonComponent } from './components/button/button/button.component';
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {AntDesignModules} from "../../core/modules/antdesign.module";
import { AfcLogoMarkWhiteComponent } from './components/logo/afc-logo-mark-white/afc-logo-mark-white.component';



@NgModule({
  declarations: [
    AfcLogoLgComponent,
    AfcLogoMarkComponent,
    LoaderFullPageComponent,
    ButtonComponent,
    AfcLogoMarkWhiteComponent
  ],
    exports: [
        AfcLogoLgComponent,
        ButtonComponent,
        LoaderFullPageComponent,
        AfcLogoMarkComponent,
        AfcLogoMarkWhiteComponent
    ],
  imports: [
    CommonModule,
    AntDesignModules
  ]
})
export class SharedModule { }
