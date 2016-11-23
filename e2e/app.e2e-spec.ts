import { Angular2SudokuPage } from './app.po';

describe('angular2-sudoku App', function() {
  let page: Angular2SudokuPage;

  beforeEach(() => {
    page = new Angular2SudokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
