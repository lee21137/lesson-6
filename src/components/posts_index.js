//83
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index'; //4.4 componentWillMount 함수안에 호출할 액션 생성자
import { Link } from 'react-router'; //실제 컴포넌트

//2.클래스 기반으로 변경
class PostsIndex extends Component {
  componentWillMount(){
  //  console.log("componentWillMount");
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to ="posts/new" className="btn btn-primary">
            Post 추가
          </Link>
        </div>
        list of blog posts.
      </div>
    );
  }
}

//5. fetchPosts를 접근 컴포넌트에서 호출
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPosts } , dispatch );
}

//하단 PostsIndex 내보내기 설정
export default connect(null, mapDispatchToProps)(PostsIndex);
//export default connect(null, { fetchPosts })(PostsIndex);

//3. 라이프리사이클 메소드 componentWillMount : 컨포넌트가 처음 DOM에 렌더링 될때 자동 호출되며 리렌더링될때는 호출되지 않음 1회만 호출
//1. 가져올 대이터 위치를 알수 없음


//1.컴포너트
/*
export default () => {
  return <div>List OF BLOG posts.</div>
}
*/