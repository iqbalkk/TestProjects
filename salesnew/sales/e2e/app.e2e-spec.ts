import { SalesPage } from './app.po';

describe('sales App', function() {
  let page: SalesPage;

  beforeEach(() => {
    page = new SalesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
