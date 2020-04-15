import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import Search from "../Search/Search";
import PatternContainer from "../../containers/PatternContainer/PatternContainer";
import UserAPI from "../../api/UserAPI";

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

  render() {
    if (!this.state.dataRendered) {
      return null;
    }
    return (
      <div className="Profile">
        <h1>Profile</h1>
        <UserInfo id={this.props.id} user={this.props.user} />
        <Search />
        <PatternContainer patterns={this.state.patterns} />
      </div>
    );
  }
}

export default Profile;
