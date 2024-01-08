import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { HttpClientModule } from '@angular/common/http';
import { NewreservationComponent } from './newreservation/newreservation.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationsComponent,
    NewreservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
