import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, shareReplay, switchMap } from 'rxjs';
import { IDoll } from '../models';
import { IFeedback } from '../models/feedback';
import { FeedbackService } from './feedback.service';
@Injectable({
  providedIn: 'root',
})
export class DollsService {
  private readonly baseUrl = 'http://localhost:3000/dolls';
  public readonly dollsSearchString$ = new BehaviorSubject<string>('');

  public set dollsSearchString(str: string) {
    this.dollsSearchString$.next(str);
  }

  constructor(
    private http: HttpClient,
    private feedback: FeedbackService
  ) {}

  public getDollsPage(page: number = 1): Observable<IDoll[]> {
    const url = `${this.baseUrl}?_page=${page}`;

    return this.http.get<IDoll[]>(url).pipe(shareReplay());
  }

  public getDollById(id: number): Observable<IDoll> {
    const url = `${this.baseUrl}/${String(id)}`;

    return this.http.get<IDoll>(url).pipe(
      switchMap((doll) => {
        return this.feedback.getDollFeedback(doll.id).pipe(
          map((feedback) => {
            return {...doll, feedback};
          })
        );
      })
    );
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
    return str
      .replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '')
      .trim()
      .replace(/ +/g, '%20');
  }

  public findDollsByParams(params: { [key: string]: string }): Observable<IDoll[]> {
    return this.http.get<IDoll[]>(this.baseUrl, { params });
  }

  public getAvailable(value: string): Observable<string[]> {
    return this.http.get<IDoll[]>('http://localhost:3000/dolls').pipe(
      map((dolls) => {
        const years = new Set();
        if (value === 'year') {
          dolls.forEach((doll) => years.add(doll.year));
        } else if (value === 'type') {
          dolls.forEach((doll) => years.add(doll.type));
        } else if (value === 'series') {
          dolls.forEach((doll) => years.add(doll.series));
        } else if (value === 'exclusive') {
          dolls.forEach((doll) => years.add(doll.exclusive));
        } else if (value === 'character') {
          dolls.forEach((doll) => years.add(doll.character));
        }
        return Array.from(years) as string[];
      })
    );
  }

  public updateDoll(doll: IDoll): Observable<IDoll> {
    return this.http.patch<IDoll>(`${this.baseUrl}/${doll.id}`, doll);
  }

  public updateDollFeedback(doll: IDoll, userId: number, feedback: Partial<IFeedback>): Observable<IDoll> {
    return this.feedback.updateDollFeedback(doll, userId, feedback).pipe(
      switchMap(() => {
        return this.feedback.getDollFeedback(doll.id);
      }),
      map((feedback) => ({...doll, feedback}))
    );
  }
}
