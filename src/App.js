import React, { Component } from 'react';
import Card from './Card';
import Ant from './assets/imgs/Ant.webp';
import Widow from './assets/imgs/Black-widow.jpeg';
import Kraven from './assets/imgs/Kraven.jpg';
import Love from './assets/imgs/Love.jpg';
import Pathaan from './assets/imgs/Pathan.jpg';
import Uncharted from './assets/imgs/Uncharted.jpg';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Card img={Ant} name="Ant Man And The Wasp" year="February 17, 2023" producer=" Kevin Feige, Stephen Broussard" />
        <Card img={Widow} name="Black Widow" year=" July 9, 2021" producer="Avi Arad, Matt Tolmach, David B. Householter" />
        <Card img={Kraven} name="Kraven The Hunter" year="October 6, 2023" producer="Kevin Feige, Stephen Broussard" />
        <Card img={Love} name="Love Again" year="May 5, 2023" producer=" Basil Iwanyk, Erica Lee, Esther Hornstein" />
        <Card img={Pathaan} name="Pathaan" year="January 25, 2023" producer=" Aditya Chopra, Maxim Ajjawi, Alexander Dostal" />
        <Card img={Uncharted} name="Uncharted" year="February 18, 2022" producer="Avi Arad, Charles Roven, Alex Gartner" />
      </div>
    )
  }
}

export default App