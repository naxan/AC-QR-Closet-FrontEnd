import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import Search from "../Search/Search";
import PatternContainer from "../../containers/PatternContainer/PatternContainer";
import PatternAPI from "../../api/PatternAPI";
import UserAPI from "../../api/UserAPI";

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

    console.log(this.props.id);
    UserAPI.getOne(this.props.id).then((res) =>
      console.log("patterns", res.createdPatterns)
    );
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
