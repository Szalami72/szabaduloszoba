import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url = "http://localhost:3000/foglalasok";

  constructor(private http: HttpClient) { }

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        map((reservations: any[]) => {
          return reservations.sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());
        })
      );
  }

  setReservation(datas: any): Observable<boolean> {
    return this.http.post(this.url, datas.value)
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

}

