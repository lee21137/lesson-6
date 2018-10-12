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

  //93장-4
  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id }>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to ="posts/new" className="btn btn-primary">
            Post 추가
          </Link>
        </div>
        {/*93장-3*/}
        <h3>블로그 리스트 페이지</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>

      </div>
    );
  }
}

//93장-1 mapStateToProps 함수를 구현 스테이트를 props로 매핑후 렌더링
function mapStateToProps(state){
  return { posts : state.posts.all };
}
/*
//5. fetchPosts를 접근 컴포넌트에서 호출
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPosts } , dispatch );
}
*/
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

//하단 PostsIndex 내보내기 설정
//export default connect(null, mapDispatchToProps)(PostsIndex);
//export default connect(null, { fetchPosts })(PostsIndex);

//3. 라이프리사이클 메소드 componentWillMount : 컨포넌트가 처음 DOM에 렌더링 될때 자동 호출되며 리렌더링될때는 호출되지 않음 1회만 호출
//1. 가져올 대이터 위치를 알수 없음


//1.컴포너트
/*
export default () => {
  return <div>List OF BLOG posts.</div>
}
*/