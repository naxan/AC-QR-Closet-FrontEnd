import React from "react";
import Search from "../Search/Search";
import PatternContainer from "../../containers/PatternContainer/PatternContainer";
import PatternAPI from "../../api/PatternAPI";
import "./Home.css";
import UploadImage from "../UploadImage/UploadImage";

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
        <h1>Custom Designs Library</h1>
        <UploadImage />
        <Search handleSearch={this.handleSearch} />
        <PatternContainer patterns={this.state.patterns} />
      </div>
    );
  }
}

export default Home;
