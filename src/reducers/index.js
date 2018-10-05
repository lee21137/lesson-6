import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'; //리듀서 포스트추가 

const rootReducer = combineReducers({
  //state: (state = {}) => state
  posts:PostsReducer  
});

export default rootReducer;
