import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesSettingsComponent } from './devices-settings/devices-settings.component';

const routes: Routes = [
                          { path: '',
                          component: DevicesComponent,
                          children: [
                                        { path: '',  component: DevicesListComponent },
                                        { path: 'settings',  component: DevicesSettingsComponent }
                                    ]
                          }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
