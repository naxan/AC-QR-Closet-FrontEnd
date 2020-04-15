import React from "react";
import Search from "../Search/Search";
import PatternContainer from "../../containers/PatternContainer/PatternContainer";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Search />
        <PatternContainer />
      </div>
    );
  }
}

export default Home;
