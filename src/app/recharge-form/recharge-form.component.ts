import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recharge-form',
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})
export class RechargeFormComponent {
  @Output() startRecharge = new EventEmitter<{ phoneNumber: string, paymentAmount: number, receivedAmount: number }>();
  phoneNumber: string = '';

  onPhoneNumberChange(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }
  onSubmit(): void {
    this.startRecharge.emit({
      phoneNumber: this.phoneNumber,
      paymentAmount: this.paymentAmount,
      receivedAmount: this.selectedAmount
    });
  }

  selectedDiscount: string = "Mobile Store Recharge 5% Discount";

  selectedAmount: number = 100;
  customAmount: number = 10;
  discountRate: number = 0;
  paymentAmount: number = this.calculatePaymentAmount(this.selectedAmount);

  isCustomAmountActive: boolean = false;
  selectedDiscountDescription: string = 'Mobile Store Recharge 5% Discount'; // 默认折扣描述
  discountOptions = [
    { value: 0.05, description: 'Mobile Store Recharge 5% Discount' },
    { value: 0.20, description: 'VIP Recharge 20% Discount' }
  ];
  updateDiscount():void {
    this.discountRate = parseFloat(this.selectedDiscount);
    const selectedOption = this.discountOptions.find(option => option.value === this.discountRate);
    if (selectedOption) {
      this.selectedDiscountDescription = selectedOption.description;
    }
    this.paymentAmount = this.calculatePaymentAmount(this.selectedAmount);
  }
  selectAmount(amount: number): void {
    this.selectedAmount = amount;
    this.paymentAmount = this.calculatePaymentAmount(amount);
    this.isCustomAmountActive = false;
  }

  calculatePaymentAmount(amount: number): number {
    return amount * (1 - this.discountRate);
  }

  onCustomAmountInput(): void {
    this.isCustomAmountActive = true;
    if(this.customAmount >= 10 || this.customAmount < 3000){
      this.selectedAmount = this.customAmount;
      this.paymentAmount = this.calculatePaymentAmount(this.customAmount);
    }
  }
  
}
