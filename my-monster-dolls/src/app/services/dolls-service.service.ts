import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { IDoll } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DollsService {
  private readonly baseUrl = 'http://localhost:3000/dolls';

  constructor(private http: HttpClient) {}

  public getDollsPage(page: number = 1): Observable<IDoll[]> {
    const url = `${this.baseUrl}?_page=${page}`;

    return this.http.get<IDoll[]>(url).pipe(shareReplay());
  }

  public getDollById(id: number): Observable<IDoll> {
    const url = `${this.baseUrl}/${id.toString()}`;

    return this.http.get<IDoll>(url);
  }

  public getDollByYear(year: number): Observable<IDoll> {
    const url = `${this.baseUrl}?year=${year}`;

    return this.http.get<IDoll>(url);
  }

  public getDollByCharacter(character: string): Observable<IDoll> {
    const url = `${this.baseUrl}?character_like=${this.sanitiseGetParam(character)}`;

    return this.http.get<IDoll>(url);
  }

  private sanitiseGetParam(str: string): string {
    return str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"").trim().replace(/ +/g, '%20');
  }
}
