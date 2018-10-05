/** URL을 매핑해서 해당 컴포너트 전달 
 * Route 오브젝트는 url과 컴포너트 사이를 매칭을 정의하는 용도 
 * 리엑트 라우터는 다른 웹페이지 네비게이트 기능제공 
*/
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index'; 

const Greeting = () => {
    return <div>Hello world!!!</div>
}

//기본적인 매핑
export default (
    <Route path="/" component={App} >
        <IndexRoute component="{PostsIndex}"/>
    </Route>
);

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