import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberComponent } from './component/phone-number.component';
import { PhoneNumberService } from './service/phone-number.service';



@NgModule({
  declarations: [
    PhoneNumberComponent
  ],
  imports: [
    CommonModule,
    
  ],
  providers: [PhoneNumberService],
  exports: [PhoneNumberComponent]
})
export class PhoneNumberModule { }
