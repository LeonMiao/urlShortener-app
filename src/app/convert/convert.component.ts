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
  urlList: IUrlModel[];
  urlShortener$: UrlShortenerService;

  constructor(_router: Router, _urlShortener: UrlShortenerService) {
    //this.convert = true;
    this.router$ = _router;
    this.urlShortener$ = _urlShortener;
  }
  ngOnInit() {
    //this.convert = true;
  }

  onClick() {
    console.log(this.inputLongUrl);

    this.urlShortener$.convertAndStore(this.inputLongUrl)
      .subscribe(
      result => {
        this.urlList = result;
        console.log('result:' + this.urlList.toString());
      },
      () => console.log('Error calling REST'),
      () => console.log('REST call:' + this.urlList)
      );

    this.router$.navigate(['/url/new_url_for_test']);
  }

  // onSubmit(urlShortener$: UrlShortenerService) {
  //   console.log(this.inputLongUrl);

  //   urlShortener$.convertAndStore(this.inputLongUrl)
  //     .subscribe(
  //     result => {
  //       this.urlList = result;
  //       console.log('result:' + this.urlList.toString());
  //     },
  //     () => console.log('Error calling REST'),
  //     () => console.log('REST call:' + this.urlList)
  //     );

  //   this.router$.navigate(['/url/new_url_for_test']);
  // }






}
