import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Si, SiSearchParameters } from '../models/si';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SiService {
  baseUrl: string = 'server';

  constructor(private http: HttpClient) {}

  fetchSi(): Observable<HttpResponse<Si[]>> {
    let url: string = `${this.baseUrl}/si`;

    return this.http.get<Si[]>(url, {observe: "response"});
  }
}
