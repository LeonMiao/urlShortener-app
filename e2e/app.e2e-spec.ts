import { UrlShortenerAppPage } from './app.po';

describe('url-shortener-app App', () => {
  let page: UrlShortenerAppPage;

  beforeEach(() => {
    page = new UrlShortenerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
