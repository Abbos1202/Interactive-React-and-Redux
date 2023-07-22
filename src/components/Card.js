import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { img, title, desc, price, priceOff, button } = this.props;
    return (
      <div className='card'>
        <div className="card__body">
          <img src={img} alt="" />
          <h2>{title}</h2>
          <p>{desc}</p>
          <h1>{price}</h1>
          <button>{button}</button>
          <span>" - {priceOff} %</span>
        </div>
      </div>
    )
  }
}
