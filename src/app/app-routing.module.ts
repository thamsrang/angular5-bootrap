import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sso/login', redirectTo: 'dashboard'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devices', loadChildren: './devices/devices.module#DevicesModule' },
  { path: 'reports', component: ReportsComponent },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'sso/logout', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
