import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneNumberModule } from './phone-number/phone-number.module';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RechargeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhoneNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
