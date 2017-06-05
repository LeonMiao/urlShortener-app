import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import IUrlModel from '../share/IUrlModel';

import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-converted',
  templateUrl: './converted.component.html',
  styleUrls: ['./converted.component.css']
})
export class ConvertedComponent implements OnInit {
  inputShortUrl: string;
  outputLongUrl: string;
  outputShortUrl: string;
  outPutShortUrlToShow: string;
  outputEmoji: string;
  outPutEmojiToShow: string;
  router$: Router;
  convertedUrl: IUrlModel;

  urlShortener$: UrlShortenerService;

  constructor(_router: Router, _urlShortener: UrlShortenerService) {
    this.router$ = _router;
    this.urlShortener$ = _urlShortener;

    console.log("current url: " + this.router$.url.split('/').pop());
    this.inputShortUrl = this.router$.url.split('/').pop();
  }

  ngOnInit() {
    console.log("ngOnInit - converted: " + this.inputShortUrl);

    this.urlShortener$.findByShortUrl(this.inputShortUrl)
      .subscribe(
      result => {
        this.convertedUrl = result;
        console.log("result for convertedUrl:");
        console.log(result);

        this.outputLongUrl = result.longUrl;
        this.outputShortUrl = result.shortUrl;
        console.log("outputShortUrl length: " + this.outputShortUrl.length);

        this.outPutShortUrlToShow = 'http://localhost:8080/redirect/' + this.outputShortUrl;
        this.outputEmoji = result.emojiLink;

        console.log("emojiLink length: " + this.outputEmoji.length);

        this.outPutEmojiToShow = 'http://localhost:8080/redirect/' + this.outputEmoji;
        
      },
      () => console.log('Error calling REST'),
      () => console.log('REST call:' + this.convertedUrl)
      );
  }

  onClick() {
    this.router$.navigate(['/url']);
  }
}
