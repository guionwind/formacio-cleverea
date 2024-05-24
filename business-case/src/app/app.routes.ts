import { Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
    {path: 'summary', component: SummaryComponent, children: [
    ]}
];
