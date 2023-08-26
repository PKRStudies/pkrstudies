import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PkrStudiesComponent } from './pkrstudies/pkrstudies.component';

import { FormsModule } from '@angular/forms';
import { PkrComponent } from './pkr/pkr.component';

@NgModule({
  declarations: [
    AppComponent,
    PkrStudiesComponent,
    PkrComponent
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
