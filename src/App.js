import React, { Component, createRef } from "react";

export class App extends Component {
  state = {
    cardNumber: "",
    cardCvv: "",
    cardName: "",
  };

  cardNumberRef = createRef();
  cardCvvRef = createRef();
  cardNameRef = createRef();

  handleValue = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.cardNumber.length === 16) {
          this.cardCvvRef.current.focus();
        }
        if (this.state.cardCvv.length === 3) {
          this.cardNameRef.current.focus();
        }
      }
    );
  };

  componentDidMount() {
    this.cardNumberRef.current.focus();
  }

  render() {
    const { cardNumber, cardCvv, cardName } = this.state;
    return (
      <div className="container">
        <form action="#">
          <div>
            <label htmlFor="cardNumber">Card Number :</label>
            <input
              onChange={this.handleValue}
              className="form-control"
              type="number"
              name="cardNumber"
              id="cardNumber"
              value={cardNumber}
              ref={this.cardNumberRef}
            />
          </div>
          <div>
            <label htmlFor="cardCVV">Card CVV :</label>
            <input
              onChange={this.handleValue}
              className="form-control"
              type="number"
              name="cardCvv"
              id="cardCvv"
              ref={this.cardCvvRef}
              value={cardCvv}
            />
          </div>
          <div>
            <label htmlFor="cardName">Card Name :</label>
            <input
              onChange={this.handleValue}
              className="form-control"
              type="text"
              name="cardName"
              ref={this.cardNameRef}
              id="cardName"
              value={cardName}
            />
          </div>
          <button className="btn btn-success m-2" type="submit">
            Pay
          </button>
        </form>
      </div>
    );
  }
}

export default App;

/* Old version  --->   */

// import React, { Component } from "react";

// export class App extends Component {

//   componentDidMount() {
//     this.refs.firstNameInput.focus()
//   }

//   render() {
//     return (
//       <div className="container">
//         <form action="#">
//           <div>
//             <label htmlFor="firstName">First Name :</label>
//             <input
//               className="form-control"
//               type="text"
//               name="firstName"
//               id="firstName"
//               ref="firstNameInput"
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;
