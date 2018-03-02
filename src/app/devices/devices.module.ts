import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesSettingsComponent } from './devices-settings/devices-settings.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesSidenavComponent } from './devices-sidenav/devices-sidenav.component';
import { DevicesComponent } from './devices.component';
import { DevicesTagsComponent } from './devices-tags/devices-tags.component';
import { DevicesCategoriesComponent } from './devices-categories/devices-categories.component';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule
  ],
  declarations: [DevicesComponent,
                  DevicesSettingsComponent,
                  DevicesListComponent,
                  DevicesSidenavComponent,
                  DevicesTagsComponent,
                  DevicesCategoriesComponent]
})
export class DevicesModule { }
