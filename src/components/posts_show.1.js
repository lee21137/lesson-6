//94
import React, { Component, PropTypes } from 'react';
//95
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index'; 
//97
import { Link } from 'react-router';

//2.클래스 기반으로 변경
class PostsShow extends Component {
  //라이터 접근
  static contextTypes = {
    router: PropTypes.object
  };

  //fetchPost로 전달하여 이를 요청 및 리졸빙
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }

  //삭제이벤트
  onDeleteClick(){
    this.props.deletePost(this.props.params.id).then(() => {
      this.context.router.push('/');
    });
  }
  
  render() {
    //console.log(this.posts.post);
    //ES6
    const { post } = this.props;   //eq const post = this.props.post;

    //스피너 이용
    if(!post){
      return <div>로딩....</div>; 
    }
    
    return (
      <div>
        <Link to="/">Back to the Index</Link>
        <button className="btn bto-danger pull-xs-right"
          onclick={this.onDeleteClick.bind(this)}>포스트삭제 {/*삭제 후 이벤트*/}
        </button>
        <h3>{ post.title }</h3>
        <h6>카테고리: { post.categories }</h6>
        <p>{ post.content }</p>
        {/*<{ this.props.params.id}*/}
      </div>
     );
  }
}
//export default PostsShow;
//export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

function mapStateToProps(state) {
  return { post: state.posts.post }
  
}
//95장 props 매핑필요 없음
export default connect(null, { fetchPost, deletePost })(PostsShow);