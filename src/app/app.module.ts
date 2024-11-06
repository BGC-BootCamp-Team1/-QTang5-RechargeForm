import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneNumberModule } from './phone-number/phone-number.module';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ConfirmAndPayComponent } from './confirm-and-pay/confirm-and-pay.component';

@NgModule({
  declarations: [
    AppComponent,
    RechargeFormComponent,
    MenuComponent,
    ConfirmAndPayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhoneNumberModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
