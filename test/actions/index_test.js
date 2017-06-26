import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import {saveComment} from '../../src/actions'
describe('actions',()=>{
    describe('save comments',()=>{
      it('has a correct action type',()=>{
          const action=saveComment();
          expect(action.type).to.equal(SAVE_COMMENT);
      });

      it('has a correct action payload',()=>{
         const action=saveComment('new comment');
         expect(action.payload).to.equal('new comment');
      });
    });

});
