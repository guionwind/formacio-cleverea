import { Routes } from '@angular/router';
import { ConfiguracionPolizaComponent } from './configuracion-poliza/configuracion-poliza.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
    {path: 'summary', component: SummaryComponent, children: [
        {path: 'configuracion', component: ConfiguracionPolizaComponent}
    ]}
];
