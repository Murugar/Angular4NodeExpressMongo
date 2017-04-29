import { Angular2FullStackPage } from './app.po';

describe('angular2-full-stack App', () => {
  let page: Angular2FullStackPage;

  beforeEach(() => {
    page = new Angular2FullStackPage();
  });

  it('should display navbar with Home and About', () => {
    page.navigateTo();
    expect(page.getNavbarHome()).toEqual('Angular 4.x Node Express Mongo');
    expect(page.getNavbarAbout()).toEqual('Home');
  });
});
