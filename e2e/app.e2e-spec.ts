import { CloicheanPage } from './app.po';

describe('cloichean App', () => {
  let page: CloicheanPage;

  beforeEach(() => {
    page = new CloicheanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
