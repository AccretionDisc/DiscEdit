import { DiscEditPage } from './app.po';

describe('disc-edit App', () => {
  let page: DiscEditPage;

  beforeEach(() => {
    page = new DiscEditPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
