import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  displayDetails: boolean = false;
  buttonLog = []

  toggleDisplayDetails() {
    if (this.displayDetails === true) {
      this.displayDetails = false;
    }
    else {
      this.displayDetails = true;
    }
    //this.buttonLog.push("item number " + (this.buttonLog.length + 1))
    this.buttonLog.push(new Date())
  }

}