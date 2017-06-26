import {renderComponent,expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('comment-list',()=>{
let component;
beforeEach(()=>{
  const props={comments:['new comment','other new comment']};
  component=renderComponent(CommentList,null,props);

});
it('show li for each comment',()=>{
  expect(component.find('li').length).to.equal(2);
});

it('show each comment that is provided',()=>{
  expect(component).to.contain('new comment');
  expect(component).to.contain('other new comment');
});
});
