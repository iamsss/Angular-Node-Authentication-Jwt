import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthServiceService {

  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:3000';
  login (user) {
    return this.http.post<any>(this.url, user).toPromise();
  }
}
