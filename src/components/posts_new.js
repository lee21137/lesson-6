//보일러플레이트 코드 (89)
import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; //connect 함수와 비슷
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
        //핼퍼
        const { fields: { title, categories, content }, handleSubmit } = this.props; //ES6
        // eq const handleSubmit = this.props.handleSubmit;
        // eq const title = this.props.fields.title;

       // console.log(title);
        //{/*이벤트 핸들러 handleSubmit : 리덕스 폼에게 유저가 이폼으로 제출 시도 밸리데이션 요청 */}
        //{/*formProps={... title}*/}
        return (
            <form onSubmit={handleSubmit(this.props.createPost )}> 
                <h3>신규등록 post</h3>
                <div className="form-group">
                    <label>title</label>
                    <input type="text" className="form-control" {...title}/> 
                    
                    <label>categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    
                    <label>content</label>
                    <textarea className="form-control" {...content}/>

                    <button type="submit" className="but btn-primary">등록</button>                    
                </div>
            </form>
        );
    }
  }

//export default PostsNew;// connect(null, mapDispatchToProps)(PostsIndex);
//커넥트 첫번쨰 오소는 form config, 2nd mapSateToprops 이고 3nd는 mapDispatchToprops
export default reduxForm({
    form: 'PostsNewForm'
    ,fields: ['title','categories','content']   //{/* 인풋이 글로벌 어플리케이션 스테이트로 세팅 */}
}, null, { createPost} )(PostsNew);

//유저 타이핑시 이것이 어플리케이션 스테이트에 저장되고 (forom 각 필드 프로퍼티로 작성 ) 아래참조
/*
state === {
    form : {
        PostsNewForm:{
            title: '...'
            ,categories: '...'
            ,content: '...'
        }
    }
}
*/