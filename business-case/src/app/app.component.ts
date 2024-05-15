import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosVehiculoComponent } from './datos-vehiculo/datos-vehiculo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatosVehiculoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'business-case';
}
