import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';
import IAccountModel from '../share/IAccountModel';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  accountList: IAccountModel[];

  constructor(urlShortener$: UrlShortenerService) {
    urlShortener$.getAllAccounts()
      .subscribe(
        result => {
          this.accountList = result;
          console.log('result:' + this.accountList.toString());
        },
        () => console.log('Error calling REST'),
        () => console.log('REST call:' + this.accountList)
      );
  }

  ngOnInit() {
  }

}
