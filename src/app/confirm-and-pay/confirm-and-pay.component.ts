import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-and-pay',
  templateUrl: './confirm-and-pay.component.html',
  styleUrl: './confirm-and-pay.component.css'
})
export class ConfirmAndPayComponent {
  @Input() phoneNumber: string = '';
  @Input() paymentAmount: number = 0;
  @Input() receivedAmount: number = 0;
}
