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
  accountId: string;
  urlList: IUrlModel[];
  name: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private urlShortener$: UrlShortenerService
  ) {
    this.accountId = route.snapshot.params['id'];
    urlShortener$.getUrlsForAccount(this.accountId)
      .subscribe(
      result => {
        console.log(result);
        this.urlList = result.urls;
        //this.name = "Post";
      },
      () => { },
      () => { }
      );
  }

  ngOnInit():void {}

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