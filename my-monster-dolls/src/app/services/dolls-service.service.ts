import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoll } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DollsService {

  private readonly baseUrl = 'http://localhost:3000/dolls';

  constructor(private http: HttpClient) { }

  public getDollById(id: number): Observable<IDoll> {
    const url = `${this.baseUrl}/${id.toString()}`;

    return this.http.get<IDoll>(url);
  }
}
