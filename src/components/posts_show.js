//94
import React, { Component } from 'react';

//2.클래스 기반으로 변경
class PostsShow extends Component {
  render() {
    return <div>상세 포스트 { this.props.params.id} </div>; 
  }
}
export default PostsShow;

//export default connect(mapStateToProps, { fetchPosts })(PostsIndex);