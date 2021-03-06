import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App',()=>{
  let component;
  beforeEach(()=>{
   component=renderComponent(App);
  })
  it('show a commentbox',()=>{
    expect(component.find('.comment-box')).to.exist;
  });

  it('show a comment list',()=>{
    expect(component.find('.comment-list')).to.exist;
  });
});
