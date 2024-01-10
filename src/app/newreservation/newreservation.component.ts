import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-newreservation',
  templateUrl: './newreservation.component.html',
  styleUrls: ['./newreservation.component.css']
})
export class NewreservationComponent {
  currentDate: string;
  uploadForm: FormGroup;

  numOfPeople: number = 2;

  constructor(private datePipe: DatePipe, private formbuilder: FormBuilder) {
    const now = new Date();
    const formattedDate = this.datePipe.transform(now, 'yyyy-MM-dd');
    this.currentDate = formattedDate || '';

    this.uploadForm = this.formbuilder.group({
      date: [this.currentDate, Validators.required],
      name: ['', Validators.required],
      people: [this.numOfPeople, Validators.required],
      address: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  uploadDatas() {
    if (this.uploadForm.valid) {
      // További teendők vagy mentés
      console.log('Az űrlap érvényes!');
      console.log('Űrlap adatok:', this.uploadForm.value);
    } else {
      console.log('Az űrlap nem érvényes!');
    }
  }
}

