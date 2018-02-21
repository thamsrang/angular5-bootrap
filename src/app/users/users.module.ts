import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { SettingsComponent } from './settings/settings.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent, MyprofileComponent, SettingsComponent]
})
export class UsersModule { }
