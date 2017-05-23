import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UrlShortenerService {
  host: string = 'http://localhost:8080';

  constructor(private http: Http) { }

  getAllAccounts() {
    return this.http.get(this.host + '/app/account/')
      .map(response => response.json());
  }

  getUrlsForAccount(pId: string) {
    return this.http.get(this.host + '/app/account/' + pId)
      .map(response => response.json());
  }

  convertAndStore(inputLongUrl: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.host + '/app/url/', {longUrl: inputLongUrl})
      .map(response => response.json());
  }
}
