import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'; //리듀서 포스트추가
import { reducer as formReducer } from 'redux-form'; //86.리듀서 리듀스폼, formReducer 로 변수생성 (이름 충돌 제거용도)

const rootReducer = combineReducers({
  //state: (state = {}) => state
  posts: PostsReducer 
 ,form: formReducer
});

export default rootReducer;
