import React, { Component } from "react";

class App extends Component {
  state = {
    second: 0,
    minute: 0,
    hour: 0,
    btnDisabled: false,
    interval: "",
    intervalsStorage: [],
  };
  startButtonClicked = () => {
    this.setState({
      btnDisabled: true,
    });
    let timer = setInterval(() => {
      const { second, minute, hour } = this.state;
      if (second === 59) {
        if (minute === 59) {
          this.setState({
            second: 0,
            minute: 0,
            hour: hour + 1,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
      } else {
        this.setState({
          second: second + 1,
        });
      }
    }, 1000);
    this.setState({ interval: timer });
  };
  stopButtonClicked = () => {
    clearInterval(this.state.interval);
    this.setState({
      btnDisabled: false,
    });
  };

  intervalButtonClicked = () => {
    const { hour, minute, second, intervalsStorage } = this.state;
    intervalsStorage.push(`${hour}:${minute}:${second}`);
    this.setState({
      intervalsStorage,
    });
  };

  clearButtonClicked = () => {
    this.stopButtonClicked();
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
      intervalsStorage: [],
    })
  };
  render() {
    const { second, minute, hour, btnDisabled, intervalsStorage } = this.state;

    return (
      <div>
        <div className="timer-container">
          <h1 className="mb-4">
            <span>Online</span> Stopwatch
          </h1>
          <div className="timer-col">
            <p className="timer-hours">{hour}</p>
            <p className="timer-label">Hours</p>
          </div>
          <div className="timer-col">
            <p className="timer-minutes">{minute}</p>
            <p className="timer-label">Minutes</p>
          </div>
          <div className="timer-col">
            <p className="timer-seconds">{second}</p>
            <p className="timer-label">Seconds</p>
          </div>
        </div>

        <div className="timer-container text-center">
          <div className="timer-btn">
            <button
              className="btn btn-success"
              onClick={this.startButtonClicked}
              disabled={btnDisabled}
            >
              Start
            </button>
          </div>
          <div className="timer-btn">
            <button className="btn btn-danger" onClick={this.stopButtonClicked}>
              Stop
            </button>
          </div>
          <div className="timer-btn">
            <button
              className="btn btn-secondary"
              onClick={this.intervalButtonClicked}
              disabled={!btnDisabled}
            >
              Interval
            </button>
          </div>
          <div className="timer-btn">
            <button
              className="btn btn-warning"
              onClick={this.clearButtonClicked}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="timer-container-intervals text-center">
          {intervalsStorage.map((item, index) => (
            <p key={index}>
              {index + 1}, =&gt; {item}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
