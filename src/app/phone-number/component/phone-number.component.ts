import { Component, EventEmitter, Output } from '@angular/core';
import { PhoneNumberService } from '../service/phone-number.service';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrl: './phone-number.component.css'
})
export class PhoneNumberComponent {
  @Output() phoneNumberChange = new EventEmitter<string>();
  phoneNumber: string = '';
  @Output() phoneNumberValid = new EventEmitter<boolean>();


  isPhoneNumberValid(): boolean {
    return /^\d{11}$/.test(this.phoneNumber);
  }
  location: string = '';

  constructor(private phoneNumberService: PhoneNumberService) {}

  onPhoneNumberChange(): void {
    this.phoneNumberChange.emit(this.phoneNumber);
    this.phoneNumberValid.emit(this.isPhoneNumberValid());
    this.location = this.phoneNumberService.getLocation(); // 调用服务获取归属地
  }
}
