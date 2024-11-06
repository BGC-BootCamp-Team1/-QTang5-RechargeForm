import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RechargeApp';

  currentStep: number = 1;
  phoneNumber: string = '';
  paymentAmount: number = 0;
  receivedAmount: number = 0;
  goToNextStep(phoneNumber: string, paymentAmount: number, receivedAmount: number): void {
    this.phoneNumber = phoneNumber;
    this.paymentAmount = paymentAmount;
    this.receivedAmount = receivedAmount;
    this.currentStep++;
  }
}
