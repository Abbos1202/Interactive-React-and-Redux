import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const AddOne = () => {
        this.setState({count: this.state.count + 1})
    }
    const Reset = () => {
        this.setState({count: 0})
    }
    const DeleteOne = () => {
        this.setState({count: this.state.count - 1})
    }
    return (
      <div>
        <div className="container size">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h1>Counter</h1>
                </div>
                <div className="card-body">
                  <h1>{this.state.count}</h1>
                </div>
                <div className="card-footer">
                  <button onClick={AddOne} className="btn btn-success m-2">Add + 1</button>
                  <button onClick={Reset} className="btn btn-primary">Reset</button>
                  <button onClick={DeleteOne} className="btn btn-danger m-2">Delete - 1</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
