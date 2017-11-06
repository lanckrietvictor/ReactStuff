import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  tick() {
    this.setState({count: (this.state.count +1)})
    this.display.bind(this)
  }

  startTimer() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  stopTimer(){
    clearInterval(this.timer)
  }

  resetTimer(){
    clearInterval(this.timer)
    this.setState({count: 0})
  }

  display(){
    if(this.state.count >= 60) {
      var minutes = Math.floor(this.state.count/60);
      var seconds = this.state.count%60;
      if(seconds < 10) {
        seconds = "0"+seconds;
      } else {
        seconds = seconds;
      }
      var display = minutes+":"+seconds;
    } else if (this.state.count<60) {
      var display = this.state.count;
    }
    return display;
  }

  render() {
    return (
      <div className="timer">
        <h1>{this.display.bind(this)()}</h1>
        <div>
          <button onClick={this.startTimer.bind(this)}>Start</button>
          <button onClick={this.stopTimer.bind(this)}>Stop</button>
          <button onClick={this.resetTimer.bind(this)}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Timer;
