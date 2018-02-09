import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { EnergyComponent } from './energy/energy.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  // { path: 'home', component: CrisisListComponent },
  { path: 'energy',      component: EnergyComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    EnergyComponent
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