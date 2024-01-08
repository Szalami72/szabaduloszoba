import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-newreservation',
  templateUrl: './newreservation.component.html',
  styleUrls: ['./newreservation.component.css']
})
export class NewreservationComponent {
  currentDate: string;

  constructor(private datePipe: DatePipe) {
    const now = new Date();
    const formattedDate = this.datePipe.transform(now, 'yyyy-MM-dd');
    this.currentDate = formattedDate || '';
  }

}
