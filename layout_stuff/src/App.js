import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";

class App extends Component {

  /*function random(1,500) {
    return Math.floor(Math.random()*(max-min+1)+min);
  };*/

  try(){
    return Math.floor(Math.random()*(500-1+1)+1);
  }

  render() {
    return (
      <div className="App">
        <Card title="Hello" num={this.try()}/>
        <Card title="How" num={this.try()}/>
        <Card title="Are ya?" num={this.try()}/>
      </div>
    );
  }
}

export default App;
