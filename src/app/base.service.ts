import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/foglalasok')
      .pipe(
        map((reservations: any[]) => {
          return reservations.sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());
        })
      );
  }
}
