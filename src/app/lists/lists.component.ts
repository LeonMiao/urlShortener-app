import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';
import IAccountModel from '../share/IAccountModel';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  username: string;
  email: string;
  accountId: string;
  accountList: IAccountModel;

  constructor(urlShortener$: UrlShortenerService) {
    urlShortener$.getUserInfo()
      .subscribe(
      result => {
        this.username = result.displayName;
        this.email = result.emails[0].value;
        this.accountId = result.emails[0].value;
        console.log("getUserInfo result: " + result);

        urlShortener$.getTheAccount(this.accountId)
          .subscribe(
          result => {
            this.accountList = result;
            console.log('result:' + this.accountList.toString());
          },
          () => console.log('Error calling REST'),
          () => console.log('REST call:' + this.accountList)
          );
      },
      () => { this.username = "not logged in" },
      () => console.log('REST call: ' + this.username)
      );

  }

  ngOnInit() {
  }

}
