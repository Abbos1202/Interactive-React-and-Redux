import React, { Component } from 'react';
import PlayerModal from './components/PlayerModal';


class App extends Component {
  state = {
    players: [],
    modalVisibility: false,
    currentData: "",
  };

  componentDidMount() {
    const players = [
      {
        firstName: "Mbappe",
        age: 23,
        club: "PSG",
        value: 160,
      },
      {
        firstName: "Salah",
        age: 29,
        club: "Liverpool",
        value: 100,
      },
      {
        firstName: "Lukaku",
        age: 28,
        club: "Chelsea",
        value: 100,
      },
      {
        firstName: "Neymar",
        age: 30,
        club: "PSG",
        value: 150,
      },
    ]
    this.setState({
      players,
    })
  }

  removePlayers = (index) => {
    const players = this.state.players;
    players.splice(index, 1)
    this.setState({ players, })
  }

  openModal = () => {
    this.setState({
      modalVisibility: true,
    })
  }
  closeModal = () => {
    this.setState({
      modalVisibility: false,
    })
  }

  changeCurrentData = (type, isInc) => {
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : {
        firstName: "none",
        age: 0,
        club: "none",
        value: 0,
      }

    if (type === "age") {
      if (isInc) {
        newCurrentData.age++
      } else if (newCurrentData.age < 1) {
        newCurrentData.age = 0;
      } else {
        newCurrentData.age--
      }
    }

    if (type === "value") {
      if (isInc) {
        newCurrentData.value++
      } else if (newCurrentData.value < 1) {
        newCurrentData.value = 0;
      } else {
        newCurrentData.value--
      }
    }

    this.setState({
      currentData: newCurrentData,
    })
  }

  saveChanges = () => {
    const {players, currentData} = this.state;
    players.push(currentData);
    currentData.firstName ="Player"
    this.setState({
      players,
      modalVisibility: false,
    })
  }

  clearCurrentData = () => {
    this.setState({
      currentData: "",
    })
  }

  render() {
    const { players, modalVisibility, currentData } = this.state;
    return (
      <div className='market'>
        <div className="container">
          <h1>⚽ TRANSFER market</h1>
          <div className="row">
            <div className="col">
              <button className='btn btn-primary m-2' onClick={this.openModal}>Add a player</button>
            </div>
            {
              modalVisibility ? <PlayerModal 
              closeModal={this.closeModal} 
              currentData={currentData} 
              saveChanges={this.saveChanges}
              clearCurrentData={this.clearCurrentData}
              changeCurrentData={this.changeCurrentData} /> : ""
             
            }
          </div>
          <div className="row">
            <div className="col">
              <table className="table border table-hover table-sm">
                <thead>
                  <tr className='table-dark'>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Market Value</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    players.map((item, index) =>
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.age}</td>
                        <td>{item.club}</td>
                        <td><span className='badge bg-primary'>💰${item.value}00m</span></td>
                        <td><button className='btn btn-danger btn-sm' onClick={() => this.removePlayers(index)}>remove</button></td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;