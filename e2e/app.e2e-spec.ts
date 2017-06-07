import { CurriculumVitaeGeneratorPage } from './app.po';

describe('curriculum-vitae-generator App', () => {
  let page: CurriculumVitaeGeneratorPage;

  beforeEach(() => {
    page = new CurriculumVitaeGeneratorPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
