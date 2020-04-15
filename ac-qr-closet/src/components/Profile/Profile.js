import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import Search from "../Search/Search";
import PatternContainer from "../../containers/PatternContainer/PatternContainer";

// --- PROPS RECEIVED ---
// APP:
// user, id

class Profile extends React.Component {
  state = {
    patterns: [],
  };

  render() {
    return (
      <div className="Profile">
        <h1>Profile</h1>
        <UserInfo id={this.props.id} user={this.props.user} />
        <Search />
        <PatternContainer />
      </div>
    );
  }
}

export default Profile;
