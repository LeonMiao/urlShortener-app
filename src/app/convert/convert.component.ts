import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import IUrlModel from '../share/IUrlModel';

import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  username: string;
  email: string;

  inputLongUrl: string;
  router$: Router;
  newUrl: IUrlModel;
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

  onSubmit() {
    console.log(this.inputLongUrl);

    this.urlShortener$.convertAndStore(this.inputLongUrl, this.email)
      .subscribe(
      result => {
        this.newUrl = result;
        console.log("result for newUrl:");
        console.log(result);

        // console.log("this.newUrl.shortUrl:");
        //console.log(this.newUrl.shortUrl);

        console.log('result:' + this.newUrl.toString());

        this.router$.navigate(['/url/' + this.newUrl.shortUrl]);

      },
      () => console.log('Error calling REST'),
      () => console.log('REST call:' + this.newUrl)
      );
  }






}
