import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesSettingsComponent } from './devices-settings/devices-settings.component';
import { DevicesCategoriesComponent } from './devices-categories/devices-categories.component';
import { DevicesTagsComponent } from './devices-tags/devices-tags.component';

const routes: Routes = [
                          { path: '',
                          component: DevicesComponent,
                          children: [
                                        { path: '',  component: DevicesListComponent },
                                        { path: 'categories',  component: DevicesCategoriesComponent },
                                        { path: 'tags',  component: DevicesTagsComponent },
                                        { path: 'settings',  component: DevicesSettingsComponent }
                                    ]
                          }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
