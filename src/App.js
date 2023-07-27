import React, { Component } from "react";

export class App extends Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    nativeLanguage: "",
    agreement: false,
    gender: "",
  };

  handleValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChecked = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };
  validateInput = (e) => {
    if (e.target.value.length < 4) {
      alert("Iltimos, 4 tadan ko'p so'z kiriting");
    }
  };
  render() {
    const { firstName, email, message, nativeLanguage, agreement } =
      this.state;
    return (
      <div className="container">
        <form>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={this.handleValue}
              onBlur={this.validateInput}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              onChange={this.handleValue}
              value={email}
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={message}
              onChange={this.handleValue}
            ></textarea>
          </div>
          <div>
            <label htmlFor="nativeLanguage">Native Language</label>
            <select
              className="form-control"
              name="nativeLanguage"
              id="nativeLanguage"
              value={nativeLanguage}
              onChange={this.handleValue}
            >
              <option disabled></option>
              <option value="uz">uz</option>
              <option value="en">eng</option>
              <option value="ru">ru</option>
            </select>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="agreement"
              className="form-check-input"
              value={agreement}
              name="agreement"
              onChange={this.handleChecked}
            />
            <label htmlFor="agreement" className="form-check-label">
              Agreement
            </label>
          </div>

          <div className="form-check">
            <label htmlFor="gender">Gender</label><br />
            <input
              type="radio"
              name="gender"
              id="gender"
              value="male"
              onChange={this.handleValue}
            />
            Male
            <input
              type="radio"
              name="gender"
              id="gender"
              value="female"
              onChange={this.handleValue}
            />
            Female
          </div>
        </form>
      </div>
    );
  }
}

export default App;
