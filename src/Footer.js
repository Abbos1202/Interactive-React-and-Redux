import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <p>&copy; Copyright Reversed {new Date().getFullYear()}</p>
            </footer>
        )
    }
}

export default Footer