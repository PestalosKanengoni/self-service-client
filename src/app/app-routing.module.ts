import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'self-service', pathMatch: 'full' },
  {
    path: 'self-service',
    loadChildren: () =>
      import('./features/self-service/self-service.module').then(
        (m) => m.SelfServiceModule,
      ),
  },
  {
    path: 'authorise',
    loadChildren: () =>
      import('./features/application/application.module').then(
        (m) => m.ApplicationModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
