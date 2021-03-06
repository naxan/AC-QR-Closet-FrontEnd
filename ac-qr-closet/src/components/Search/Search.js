import React from "react";
import { Input } from "semantic-ui-react";
import "./Search.css";

// --- PROPS RECEIVED ---
// PROFILE:
// handleSearch
// HOME:
// handleSearch

class SearchBar extends React.Component {
  state = {
    value: "",
  };

  updateQuery = (e) => {
    this.setState({
      value: e.target.value,
    });
    this.props.handleSearch(e.target.value);
  };

  render() {
    const { value } = this.state;
    return (
      <Input
        className="SearchBar"
        icon="search"
        placeholder="Search Designs..."
        value={value}
        onChange={this.updateQuery}
      />
    );
  }
}

export default SearchBar;
