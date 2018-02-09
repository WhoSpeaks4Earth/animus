import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EnergyComponent } from './energy/energy.component';
import { SolarComponent } from './energy/solar/solar.component';

const appRoutes: Routes = [
  { path: 'energy', component: EnergyComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    EnergyComponent,
    SolarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- when debugging
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }