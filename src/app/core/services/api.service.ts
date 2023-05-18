import {  Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestOptions } from '../models/http-request-options.model';
import { HttpClient,HttpParams } from '@angular/common/http';

const ROOT_URL = 'https://openlibrary.org';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient
  ) {}

  get<T>(url: string, page: number, pageSize: number): Observable<T> {
    // eslint-disable-next-line prefer-const
    let params = new HttpParams()
    .set('page', page.toString())
    .set('pageSize', pageSize.toString());
    const apiPath = `${ROOT_URL}${url}`;
    return this.httpClient.get<T>(apiPath,{params});
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post<T>(url: string, body: Record<string, any> = {}, config?: HttpRequestOptions): Observable<T> {
    const apiPath = `${ROOT_URL}${url}`;
    return this.httpClient.post<T>(apiPath, body, config);
  }

  delete<T>(url: string, config?: HttpRequestOptions): Observable<T> {
    const apiPath = `${ROOT_URL}${url}`;
    return this.httpClient.delete<T>(apiPath, config);
  }
}
