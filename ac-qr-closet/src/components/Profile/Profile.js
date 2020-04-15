import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import Search from "../Search/Search";
import PatternContainer from "../../containers/PatternContainer/PatternContainer";
import PatternAPI from "../../api/PatternAPI";

// --- PROPS RECEIVED ---
// APP:
// user, id

class Profile extends React.Component {
  state = {
    patterns: [],
  };

  getPosts = () => {
    // PLACEHOLDER for testing!
    PatternAPI.getAll().then((res) => console.log(res));
  };

  componentDidMount = () => {
    this.getPosts();
  };

  render() {
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
