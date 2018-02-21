import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesSettingsComponent } from './devices-settings/devices-settings.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesSidenavComponent } from './devices-sidenav/devices-sidenav.component';
import { DevicesComponent } from './devices.component';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule
  ],
  declarations: [DevicesComponent, DevicesSettingsComponent, DevicesListComponent, DevicesSidenavComponent]
})
export class DevicesModule { }
