import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UrlShortenerService {
  host: string = 'http://localhost:8080';
  //host: string = 'http://localhost:4200';

  userId: string = "";

  constructor(private http: Http) { }

  //=======================

  setUserid(uId: string) {
    this.userId = uId;
  }

  // validateLUsernameInfo(username: string) {
  //   return this.http.get(this.host + '/api/user/username/' + username)
  //     .map(response => response.json());
  // }

  getUserInfo() {
    return this.http.get(this.host + '/auth/userdata')
      .map(response => response.json());
  }

  //=======================

  getTheAccount(pId: string) {
    return this.http.get(this.host + '/app/account/' + pId)
      .map(response => response.json());
  }

  getUrlsForAccount(pId: string) {
    return this.http.get(this.host + '/app/account/url/' + pId)
      .map(response => response.json());
  }

  convertAndStore(inputLongUrl: string, inputAccountId: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.host + '/app/url/', { longUrl: inputLongUrl, accountId: inputAccountId })
      .map(response => response.json());
  }

  findByShortUrl(inputShortUrl: string, inputAccountId: string) {
    return this.http.get(this.host + '/app/url/' + inputAccountId + '/' + inputShortUrl)
      .map(response => response.json());
  }



}
