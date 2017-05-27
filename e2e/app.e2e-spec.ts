import { MaterialTodoListPage } from './app.po';

describe('material-todo-list App', () => {
  let page: MaterialTodoListPage;

  beforeEach(() => {
    page = new MaterialTodoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
