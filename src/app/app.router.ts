import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import { NavComponent } from './nav/nav.component';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/atm', pathMatch: 'full', component: AtmComponent },
  {path: '/teller', component: TellerComponent},
  {path: '/contact', component: ContactComponent},
  {path: '/nav', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export const router: ModuleWithProviders = RouterModule.forRoot(routes);
