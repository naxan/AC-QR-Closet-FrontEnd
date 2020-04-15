import React from "react";
import Search from "../Search/Search";
import PatternContainer from "../../containers/PatternContainer/PatternContainer";
import PatternAPI from "../../api/PatternAPI";

class Home extends React.Component {
  state = {
    patterns: [],
    dataRendered: false,
  };

  getPosts = () => {
    PatternAPI.getAll().then((res) =>
      this.setState({
        patterns: res,
        dataRendered: true,
      })
    );
  };

  componentDidMount = () => {
    this.getPosts();
  };

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Search />
        <PatternContainer patterns={this.state.patterns} />
      </div>
    );
  }
}

export default Home;
