import React, { Component } from 'react';
import './App.css';
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main>
          <Timer/>
        </Main>
      </div>
    );
  }
}

export default App;
