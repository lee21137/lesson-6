import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router'; /*2. 라이터 부분 추가*/
/* 1. 리엑트 라우터로 적용해서 필요없는 부분*/
/*import App from './components/app';*/
import reducers from './reducers';
//4.url 매핑
import routes from './routes';
//5.axios 
import promise from 'redux-promise';

//http://www.blog.com/#post/5  해시(#) 이후 모든것 감지 
//const createStoreWithMiddleware = applyMiddleware()(createStore);
const createStoreWithMiddleware = applyMiddleware(
  promise
  )
  (createStore);


//<App /> 삭제
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));

  //* 81강부터 다시 ~ */