import React from "react";
import { Input } from "semantic-ui-react";

// --- PROPS RECEIVED ---
// PROFILE:
//

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
        icon="search"
        placeholder="Search"
        value={value}
        onChange={this.updateQuery}
      />
    );
  }
}

export default SearchBar;
