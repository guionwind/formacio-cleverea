import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  toInactive: number = 0;
  toActive: number = 0;

  countToInactive() {
    ++this.toInactive;
    console.log("Active to inactive: " + this.toInactive)
  }

  countToActive() {
    ++this.toActive;
    console.log("Inactive to active: " + this.toActive)
  }
}
