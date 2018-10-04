import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {Router, browserHistory} from 'react-router'; /*2. 라이터 부분 추가*/

/* 1. 리엑트 라우터로 적용해서 필요없는 부분*/
/*import App from './components/app';*/
import reducers from './reducers';
 
//http://www.blog.com/#post/5  해시(#) 이후 모든것 감지 
const createStoreWithMiddleware = applyMiddleware()(createStore);

//<App /> 삭제
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} />
  </Provider>
  , document.querySelector('.container'));


  /*
75강
  */