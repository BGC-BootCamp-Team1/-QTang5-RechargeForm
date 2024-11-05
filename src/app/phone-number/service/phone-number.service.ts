import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  constructor() { }
  getLocation(): string {
    return 'Beijing';
  }
}
