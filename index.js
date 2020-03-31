import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import Hello from './Hello';
import data from './data'
import TweetContainer from './TweetContainer'
import './style.css';

class App extends Component {
 
  render() {
    return (
      <div>
       <h1>Le Tweets</h1>
       <TweetContainer data= { data }/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
