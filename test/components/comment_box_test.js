import {renderComponent,expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox',()=>{
  let component;
  beforeEach(()=>{
    component=renderComponent(CommentBox);
  })
  it('have class',()=>{
    expect(component).to.have.class('comment-box');
  });

  it('show textarea',()=>{
    expect(component.find('textarea')).to.exist;
  });

  it('show button',()=>{
    expect(component.find('button')).to.exist;
  });

  describe('Entering some texts',()=>{
    beforeEach(()=>{
      component.find('textarea').simulate('change','new content');
    });
      it('show that text in textarea',()=>{
        expect(component.find('textarea')).to.have.value('new content');
      });
      it('when submiited,clear the text in textarea',()=>{
         component.simulate('submit');
         expect(component.find('textarea')).to.have.value('');
      });
    })



})
