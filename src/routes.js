/** 78장  
 * URL을 매핑해서 해당 컴포너트 전달 
 * Route 오브젝트는 url과 컴포너트 사이를 매칭을 정의하는 용도 
 * 리엑트 라우터는 다른 웹페이지 네비게이트 기능제공 
*/
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/Posts_index'; //
import PostsNew from './components/Posts_new'; //


const Greeting = () => {
    return <div>Hello world!!!</div>
};

//기본적인 매핑 component 선언시 '' or ""로 묶으면 오류
export default (
    // {/*리액트라우터는 링크 컴포넌트를 가지고 있고 한라우트에서는 다른곳으로 연결할수 있음 */}
    <Route path="/" component={App} >
        <IndexRoute component={PostsIndex} /> 
        <Route path="/posts/new" component={PostsNew} />    
    </Route>
);
//{/* 포스트생성 패스 */}
/*
        <Route path="greet"  component={Greeting} />
        <Route path="greet2" component={Greeting} />
        <Route path="greet3" component={Greeting} />
 */
//google.com/ - > renders app
/* 트리구조
/           App
/greet      App Greeting
/greet2     App Greeting
/greet3     App Greeting
*/