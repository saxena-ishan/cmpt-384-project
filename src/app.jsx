/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';


//Root sass file for webpack to compile
import './sass/main';

//Initial Default Redux Settings  
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

