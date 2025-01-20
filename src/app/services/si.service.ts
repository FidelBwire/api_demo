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

  fetchSi(params: SiSearchParameters): Observable<HttpResponse<Si[]>> {
    let url: string = `${this.baseUrl}/si?PageNumber=${params.PageNumber}&PageSize=${params.PageSize}`;  // Passing parameters]

    if (params.Code)
      url = `${url}&Code=${params.Code}`;

    if (params.Description)
      url = `${url}&Description=${params.Description}`

    return this.http.get<Si[]>(url, { observe: 'response' });
  }

  // GET => Fetch data from the server
  // POST => Send data to the server
  // PUT => Update data on the server
  // DELETE => Delete data from the server
  // OPTIONS => Used by client server to confirm supported HTTP methods

}

// "response" : {
//   "body": {

//   },
//   "headers": {

//   }
// }
