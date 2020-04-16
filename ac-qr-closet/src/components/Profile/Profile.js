import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import Search from "../Search/Search";
import PatternContainer from "../../containers/PatternContainer/PatternContainer";
import UserAPI from "../../api/UserAPI";
import PatternAPI from "../../api/PatternAPI";

// --- PROPS RECEIVED ---
// APP:
// user, id

class Profile extends React.Component {
  state = {
    patterns: [],
    dataRendered: false,
  };

  getPosts = () => {
    UserAPI.getOne(this.props.id).then((res) =>
      this.setState({
        patterns: res.createdPatterns,
        dataRendered: true,
      })
    );
  };

  componentDidMount = () => {
    this.getPosts();
  };

  handleSearch = (query) => {
    UserAPI.getOne(this.props.id).then((res) => {
      let filteredPatterns = res.createdPatterns.filter((pattern) => {
        return pattern.title.toLowerCase().indexOf(query.toLowerCase()) >= 0;
      });
      this.setState({
        patterns: filteredPatterns,
      });
    });
  };

  handleDelete = (patternId) => {
    PatternAPI.destroy(patternId).then((res) => {
      let existingPatterns = this.state.patterns.filter((pattern) => {
        return pattern._id !== res._id;
      });
      this.setState({
        patterns: existingPatterns,
      });
    });
  };

  render() {
    if (!this.state.dataRendered) {
      return null;
    }
    return (
      <div className="Profile">
        <h1>Profile</h1>
        <UserInfo id={this.props.id} user={this.props.user} />
        <Search handleSearch={this.handleSearch} />
        <PatternContainer
          patterns={this.state.patterns}
          userOwned={true}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Profile;
