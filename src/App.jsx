import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
 
      const AddDeleteOne = (value) => {
          this.setState({count: value})
    }
    const Reset = () => {
        this.setState({count: 0})
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
                  <button onClick={() => AddDeleteOne(this.state.count + 1)} className="btn btn-success m-2">Add + 1</button>
                  <button onClick={Reset} className="btn btn-primary">Reset</button>
                  <button onClick={() => AddDeleteOne(this.state.count - 1)} className="btn btn-danger m-2">Delete - 1</button>
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
