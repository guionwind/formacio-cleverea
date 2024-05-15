import { Component } from '@angular/core';

@Component({
  selector: 'app-submit-username',
  templateUrl: './submit-username.component.html',
  styleUrl: './submit-username.component.css'
})
export class SubmitUsernameComponent {
  username: string = ""

  onSubmitUsername() {
    this.username = ""
  }
}
