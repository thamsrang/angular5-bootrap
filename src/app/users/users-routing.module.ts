import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyprofileComponent } from './myprofile/myprofile.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
                          { path: '',
                            component: UsersComponent,
                            children: [
                                          { path: '',  redirectTo: 'profile', pathMatch: 'full' },
                                          { path: 'profile',  component: MyprofileComponent },
                                          { path: 'settings',  component: SettingsComponent }
                                      ]
                          }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
