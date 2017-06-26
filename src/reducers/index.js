import { combineReducers } from 'redux';
import CommentReducer from './comment';
const rootReducer = combineReducers({
  comments: CommentReducer
});

export default rootReducer;
