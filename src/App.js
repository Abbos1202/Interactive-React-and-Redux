/* LifeCycle - UnMount --> componentWillUnMount */

import React, { Component } from 'react';
import Note from './Note';

export default class App extends Component {
  state = {
    status: true,
  }
  changeStatus = (type) => {
    this.setState({
      status: type === "show"
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <h1>React LifeCycle</h1>
        <button onClick={() => this.changeStatus("show")}>Show</button>
        <button onClick={() => this.changeStatus("hide")}>Hide</button>
        {this.state.status ? <Note /> : ""}
      </div>
    )
  }
}


/* LifeCycle - Update --> componentDidUpdate */

// import React, { Component } from 'react';

// export default class App extends Component {

//   state = {
//     authorCourse: "Azizbek Khabibullayev",
//   }

//   changeName = () => {
//     this.setState({
//       authorCourse: "Abbos Ibrokhimov",
//     })
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("prevProps", prevProps);
//     console.log("prevState", prevState);
//   }

//   render() {
//     console.log("App - render ...")
//     return (
//       <div className='wrapper'>
//         <h1>React LifeCycle</h1>
//         <h3>{this.state.authorCourse}</h3>
//         <button onClick={this.changeName}>Change Author</button>
//       </div>
//     )
//   }
// }


/* LifeCycle - Mounting --> constructor vs render vs componentDidMount */

// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     alert("Welcome to our website")
//   }

//   componentDidMount() {
//     console.log("App - componentDidMount...")
//   }
//   render() {
//     console.log("App - render ...")
//     return (
//       <div className='wrapper'>
//         <h1>React LifeCycle</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea eaque tenetur ab at ex dolor quae? Corrupti veritatis sit odio. Quasi possimus necessitatibus cupiditate sapiente sint laboriosam exercitationem corporis!</p>
//       </div>
//     )
//   }
// }
