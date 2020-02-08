import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchButton.css";
class SearchButton extends React.Component {
  render() {
    return (
      <button className="buttonSearch box" onClick={this.props.onSearchSubmit}>
        Arama
      </button>
    );
  }
}
export default SearchButton;
