import { Component } from '@angular/core';

@Component({
  selector: 'app-recharge-form',
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})
export class RechargeFormComponent {
  updateDiscount():void {
    console.log(this.selectedDiscount);
  }
  selectedDiscount: string = "Mobile Store Recharge 5% Discount";

}
