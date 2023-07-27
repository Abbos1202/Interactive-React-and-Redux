import React, { Component } from "react";

export class App extends Component {
  state = {
    email: "",
    isAgree: false,
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleChecking = (e) => {
    this.setState({
      isAgree: e.target.checked,
    });
  };

  submitBtn = () => {
    const regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = regEmail.test(this.state.email);

    const isValidIsActive = this.state.isAgree;

    if (!isValidEmail) {
      alert("Please, enter valid email!");
      return;
    }

    if (!isValidIsActive) {
      alert("Please, agree with terms!");
      return;
    }

    this.setState({
      email: "",
      isAgree: false,
    });

    alert("Congratulations 🎉");
  };

  render() {
    const { email, isAgree } = this.state;
    return (
      <div className="contact">
        <div className="contact-card">
          <div className="contact-title">
            <h2>Contact Us</h2>
          </div>
          <div className="contact-form">
            <form action="#">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={this.handleEmail}
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div>
                <input
                  checked={isAgree}
                  onChange={this.handleChecking}
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                />
                <label htmlFor="agreement">Terms &amp; Conditions</label>
              </div>

              <button onClick={this.submitBtn} className="btn" type="button">
                - Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
