import {expect} from '../test_helper';
import CommentReducer from '../../src/reducers/comment';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('CommentReducer',()=>{
  it('handle unknown action type',()=>{
     expect(CommentReducer(undefined,{})).to.eql([]);
  });

  it('handle action type of SAVE_COMMENT',()=>{
    const action={type:SAVE_COMMENT,payload:'new comment'}
    expect(CommentReducer([],action)).to.eql(['new comment']);
  });
})
