import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cobertura } from '../../enums/cobertura.enum';


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
  //@Input() description: string;
  //moure a un adapter?
  @Input() cobertura: Cobertura;
  bool: boolean;

  @Output() sendUpdate = new EventEmitter<[boolean, Cobertura]>();

  constructor() {
    //this.description = ""
    this.bool = false
  }

  onSwitch() {
    this.sendUpdate.emit([this.bool, this.cobertura]);
  }

}
