import React, { Component } from 'react';

import { Provider } from 'react-redux';
import './App.css';
import store from './stores';

import Home from './components/layout/Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <div className='App'>
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
