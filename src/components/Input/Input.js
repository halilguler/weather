import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Input.css";
class Input extends React.Component {
  render() {
    return (
      <div className="form__group mt-20">
        <input
          className="form__input search-input"
          required="required"
          placeholder="Your city name"
          name="input2"
          onKeyPress={this.props.onKeyPress}
          onChange={this.props.onHandleChange}
        ></input>
      </div>
    );
  }
}
export default Input;
