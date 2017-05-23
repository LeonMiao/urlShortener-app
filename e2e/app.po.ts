import { browser, by, element } from 'protractor';

export class UrlShortenerAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
