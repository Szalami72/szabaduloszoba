import { Component } from '@angular/core';
import { BaseService } from '../base.service';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  reservations: any;
  errorMessage = "";
  isError = false;

  constructor(private service: BaseService) {
    this.service.getReservations().subscribe({
      next: (res) => {
        this.reservations = res;
        this.isError = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.isError = true;
      }
    })

  }
}
