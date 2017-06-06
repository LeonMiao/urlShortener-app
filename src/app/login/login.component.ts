import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { UrlShortenerService } from '../url-shortener.service';
import IAccountModel from '../share/IAccountModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //switchElement = true;
  username: string;
  email: string;
  router$: Router;
  urlShortener$: UrlShortenerService;


  constructor(_router: Router, _urlShortener: UrlShortenerService) {
    this.router$ = _router;
    this.urlShortener$ = _urlShortener;
    
    this.urlShortener$.getUserInfo()
      .subscribe(
      result => {
        this.username = result.displayName;
        this.email = result.emails[0].value;
        console.log("result: " + result);

      },
      () => { this.username = "not logged in" },
      () => console.log('REST call: ' + this.username)
      );
  }

  ngOnInit() {
  }

  onClick() {

  }
}
