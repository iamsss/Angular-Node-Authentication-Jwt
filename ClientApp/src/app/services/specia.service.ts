import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpeciaService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/special';
  getSpecial () {
    console.log('Body', );
    return this.http.get<any>(this.url);
  }
}
