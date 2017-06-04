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
  inputLongUrl: string;
  router$: Router;
  newUrl: IUrlModel;
  urlShortener$: UrlShortenerService;

  constructor(_router: Router, _urlShortener: UrlShortenerService) {
    this.router$ = _router;
    this.urlShortener$ = _urlShortener;
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.inputLongUrl);

    this.urlShortener$.convertAndStore(this.inputLongUrl)
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
