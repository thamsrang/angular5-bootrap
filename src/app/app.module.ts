import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { LoginComponent } from './login/login.component';
import { DashSidemenuComponent } from './dash-sidemenu/dash-sidemenu.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    LoginComponent,
    DashSidemenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppHeaderComponent, AppComponent, AppFooterComponent]
})
export class AppModule { }
