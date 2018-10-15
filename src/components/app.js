import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
        <div>
          리액트 라우터+리덕스 폼
          {this.props.children}
        </div>
    );
  }
}