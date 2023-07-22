import React, { Component } from 'react';
import Card from './components/Card';
import strawberry from './assets/imgs/Strawberry.png';
import flamingo from './assets/imgs/Flamingo.png';
import national from './assets/imgs/National.png';
import whiteCran from './assets/imgs/WhiteCran.png';
import banana from './assets/imgs/Banana.avif';
import pineapple from './assets/imgs/Pineapple.png';

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Card img={strawberry} title="Orange Juice" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum." price="$4.99" priceOff="30" button="VIEW PRODUCT" />
        <Card img={flamingo} title="Flamingo Juice" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum." price="$4.99" priceOff="" button="VIEW PRODUCT" />
        <Card img={national} title="National Juice" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum." price="$4.99" priceOff="" button="VIEW PRODUCT" />
        <Card img={whiteCran} title="Strawberry Juice" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum." price="$4.99" priceOff="" button="VIEW PRODUCT" />
        <Card img={banana} title="Banana Juice" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum." price="$4.99" priceOff="" button="VIEW PRODUCT" />
        <Card img={pineapple} title="Pineapple Juice" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum." price="$4.99" priceOff="70" button="VIEW PRODUCT" />
      </div>
    )
  }
}
