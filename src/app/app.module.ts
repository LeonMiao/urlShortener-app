import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';

import { ListsTableComponent } from './lists/lists-table/lists-table.component';

import { UrlShortenerService } from './url-shortener.service';

import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ListComponent,
    ListsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/'}, UrlShortenerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
