import React from "react";

// --- PROPS RECEIVED ---
// PROFILE:
//

class Search extends React.Component {
  state = {
    query: "",
  };

  updateQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return <h2>Search</h2>;
  }
}

export default Search;
