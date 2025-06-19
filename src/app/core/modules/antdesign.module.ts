import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import {NzContentComponent, NzLayoutModule} from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import {NzInputGroupComponent, NzInputModule} from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzTagModule} from "ng-zorro-antd/tag";
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzTimelineMode, NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzProgressModule } from "ng-zorro-antd/progress";
import { NzRateModule } from "ng-zorro-antd/rate";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import { NzResizableModule } from 'ng-zorro-antd/resizable';



const modules = [
  NzAutocompleteModule,
  NzSpaceModule,
  NzTreeModule,
  NzTreeViewModule,
  NzTreeSelectModule,
  NzButtonModule,
  NzCommentModule,
  NzListModule,
  NzUploadModule,
  NzLayoutModule,
  NzBadgeModule,
  NzAffixModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzIconModule,
  NzPageHeaderModule,
  NzFormModule,
  NzNotificationModule,
  NzMessageModule,
  NzTimePickerModule,
  NzStatisticModule,
  NzToolTipModule,
  NzSkeletonModule,
  NzDropDownModule,
  NzSelectModule,
  NzEmptyModule,
  NzModalModule,
  NzTabsModule,
  NzResultModule,
  NzTableModule,
  NzDatePickerModule,
  NzAvatarModule,
  NzAlertModule,
  NzInputModule,
  NzSpinModule,
  NzStepsModule,
  NzCollapseModule,
  NzDrawerModule,
  NzCheckboxModule,
  NzSwitchModule,
  NzListModule,
  NzDividerModule,
  NzSliderModule,
  NzTagModule,
  NzPaginationModule,
  NzTreeModule,
  NzCommentModule,
  NzTimelineModule,
  NzCascaderModule,
  NzRadioModule,
  NzSegmentedModule,
  NzCalendarModule,
  NzProgressModule,
  NzRateModule,
  NzPopconfirmModule,
  NzPopoverModule,
  NzTransferModule,
  NzInputGroupComponent,
  NzContentComponent,
  NzCardModule,
  NzInputNumberModule,
  NzResizableModule,
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class AntDesignModules {}
