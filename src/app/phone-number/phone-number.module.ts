import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberComponent } from './component/phone-number.component';
import { PhoneNumberService } from './service/phone-number.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PhoneNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [PhoneNumberService],
  exports: [PhoneNumberComponent]
})
export class PhoneNumberModule { }
