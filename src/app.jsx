/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { index } from './pages';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


//Root sass file for webpack to compile
import './sass/main';

//Initial Default Redux Settings  
// const store = configureStore();

class App extends Component {
  render() {
    return (
      <Route path="/" component={index} />

      // <div className="boilerplate-div">react-boilerplate</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

