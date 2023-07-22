import React, { Component } from 'react'

export class Card extends Component {
    render() {
        const { img, name, year, producer } = this.props;
        return (
            <div>
                <div className="wrapper">
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                    <p>{year}</p>
                    <p>{producer}</p>
                </div>
            </div>
        )
    }
}

export default Card