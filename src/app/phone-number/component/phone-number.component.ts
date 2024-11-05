import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrl: './phone-number.component.css'
})
export class PhoneNumberComponent {
  @Output() phoneNumberChange = new EventEmitter<string>();
  phoneNumber: string = '';

  onPhoneNumberChange(): void {
    this.phoneNumberChange.emit(this.phoneNumber);
  }
}
