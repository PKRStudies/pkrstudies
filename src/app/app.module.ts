import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PkrStudiesComponent } from './pkrstudies/pkrstudies.component';

import { FormsModule } from '@angular/forms';
import { PkrComponent } from './pkr/pkr.component';
import { SuccessAlertsComponent } from './success-alerts/success-alerts.component';
import { WarningAlertsComponent } from './warning-alerts/warning-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    PkrStudiesComponent,
    PkrComponent,
    SuccessAlertsComponent,
    WarningAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
