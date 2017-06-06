import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UrlShortenerService } from '../url-shortener.service';

import IAccountModel from '../share/IAccountModel';
import IUrlModel from '../share/IUrlModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  username: string;
  email: string;
  accountId: string;
  urlList: IUrlModel[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private urlShortener$: UrlShortenerService
  ) {
    //this.accountId = route.snapshot.params['id'];
    urlShortener$.getUserInfo()
      .subscribe(
      result => {
        this.username = result.displayName;
        this.email = result.emails[0].value;
        this.accountId = result.emails[0].value;
        console.log("getUserInfo result: " + result);

        urlShortener$.getUrlsForAccount(this.accountId)
          .subscribe(
          result => {
            console.log("getUrlsForAccount result: " + result);
            this.urlList = result.urls;
            //this.name = "Post";
          },
          () => { },
          () => { }
          );
      },
      () => { this.username = "not logged in" },
      () => console.log('REST call: ' + this.username)
      );

  }

  ngOnInit(): void { }

}


// interface IAccountModel {
//     accountId: number;
//     userName: string;
//     fName: string;
//     mName: string;
//     lName: string;
//     emailAddr: string;
//     phoneNum: string;
//     userType: string;
//     createDate: string;
// }

// interface IUrlModel {
//     accountId: number;
//     urls: [ {
//         urlId: number;
//         shortUrl: string;
//         longUrl: string;
//         expirationDate: string;
//         isRemoved: boolean;
//     }];
// }