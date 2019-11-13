/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Root sass file for webpack to compile
import './sass/main';

//Initial Default Redux Settings  
// const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="boilerplate-div">react-boilerplate</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

