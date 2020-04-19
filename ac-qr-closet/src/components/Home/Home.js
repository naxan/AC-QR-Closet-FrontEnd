import React from "react";
import Search from "../Search/Search";
import PatternContainer from "../../containers/PatternContainer/PatternContainer";
import PatternAPI from "../../api/PatternAPI";
import "./Home.css";

import laBelle from "../../images/Acnl-labelle.png";
import logo from "../../images/Boutique-Sign.png";
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

  handleSearch = (query) => {
    PatternAPI.getAll().then((res) => {
      let filteredPatterns = res.filter((pattern) => {
        return pattern.title.toLowerCase().indexOf(query.toLowerCase()) >= 0;
      });
      this.setState({
        patterns: filteredPatterns,
      });
    });
  };

  render() {
    if (!this.state.dataRendered) {
      return null;
    }
    return (
      <div className="Home">
        <div className="welcome-graphic">
          <img src={laBelle} alt={"Label Able"} className="laBelle" />
          <div className="bubble">
            <h1>Welcome to</h1>
            <img src={logo} alt={"laBelle Boutique logo"} className="logo" />
            <p>A fan-made library for Animal Crossing Designs</p>
          </div>
        </div>
        <Search handleSearch={this.handleSearch} />
        <PatternContainer patterns={this.state.patterns} />
      </div>
    );
  }
}

export default Home;
