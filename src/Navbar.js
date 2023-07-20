import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">UNIVERSITY</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar