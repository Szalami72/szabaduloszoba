import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "foglalasok", component: ReservationsComponent },

  { path: "", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
