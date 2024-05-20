import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sliderinput',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './sliderinput.component.html',
  styleUrl: './sliderinput.component.css'
})
export class SliderinputComponent {
  @Input() description: string;
  bool: boolean;

  @Output() sendUpdate = new EventEmitter<boolean>();

  constructor() {
    this.description = ""
    this.bool = false
  }

  onSwitch() {
    this.sendUpdate.emit(this.bool);
  }

}
