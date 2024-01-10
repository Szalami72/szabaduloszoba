import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url = "http://localhost:3000/foglalasok";

  constructor(private http: HttpClient, private router: Router) { }

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        map((reservations: any[]) => {
          return reservations.sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());
        })
      );
  }

  setReservation(datas: any) {
    this.http.post(this.url, datas.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/foglalasok']);
        },
        (error) => {
          console.error('Hiba az adatfeltöltés során:', error);
        }
      );
  }
}

