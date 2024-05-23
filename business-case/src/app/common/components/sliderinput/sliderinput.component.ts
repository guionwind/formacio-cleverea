import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sliderinput',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './sliderinput.component.html',
  styleUrl: './sliderinput.component.css'
})
export class SliderinputComponent {
  @Input() config: {id: string, description: string};
  bool: boolean;

  @Output() sendUpdate = new EventEmitter<{activate:boolean, id:string}>();

  constructor() {
  }

  onSwitch() {
    this.sendUpdate.emit({activate: this.bool, id: this.config.description});
  }

}
