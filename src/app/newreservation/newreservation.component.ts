import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newreservation',
  templateUrl: './newreservation.component.html',
  styleUrls: ['./newreservation.component.css']
})
export class NewreservationComponent {
  currentDate: string;
  uploadForm: FormGroup;
  numOfPeople: number = 2;
  errorMessage = "";
  isError = false;

  constructor(private datePipe: DatePipe, private formbuilder: FormBuilder, private baseservice: BaseService, private router: Router) {
    const now = new Date();
    const formattedDate = this.datePipe.transform(now, 'yyyy-MM-dd');
    this.currentDate = formattedDate || '';
    this.uploadForm = this.formbuilder.group({
      datum: [this.currentDate, Validators.required],
      nev: ['', Validators.required],
      fo: [this.numOfPeople, Validators.required],
      cim: ['', Validators.required],
      iranyitoszam: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });

  }

  uploadDatas() {
    if (this.uploadForm.valid) {
      this.baseservice.setReservation(this.uploadForm)
        .subscribe(
          (success) => {
            if (success) {
              this.router.navigate(['/foglalasok']);
            } else {
              this.errorMessage = "Hiba a feltöltés során!";
              this.isError = true;
            }
          }
        );
    }
  }

  onNumOfPeopleChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.numOfPeople = +newValue;
  }



}

