import React from "react";
import { Image, Segment } from "semantic-ui-react";
import "./UserInfo.css";
import UserAPI from "../../api/UserAPI";

// --- PROPS RECEIVED ---
// PROFILE:
// user, id

class UserInfo extends React.Component {
  state = {
    town: "",
    numOfCreatedPatterns: 0,
    authorCode: "",
    profilePic: null,
  };

  getUserInfo = () => {
    UserAPI.getOne(this.props.id).then((res) =>
      this.setState({
        town: res.town,
        numOfCreatedPatterns: res.createdPatterns.length,
        authorCode: res.authorCode,
        profilePic: res.profilePic,
      })
    );
  };

  componentDidMount = () => {
    this.getUserInfo();
  };

  render() {
    return (
      <div className="UserInfo">
        <Segment>
          <div className="flex-container">
            {!this.state.profilePic && (
              <Image
                src="https://react.semantic-ui.com/images/wireframe/square-image.pn"
                size="small"
                circular
                inline={true}
              />
            )}
            {this.state.profilePic && (
              <Image
                src={"http://localhost:4000/" + this.state.profilePic.imageData}
                size="small"
                circular
                inline={true}
              />
            )}

            <div>
              <h2>{this.props.user}</h2>

              <p>
                <strong>Creator ID: </strong>
                {this.state.authorCode}
              </p>
              <p>
                <strong>Town: </strong>
                {this.state.town}
              </p>
              <p>
                <strong>Patterns Made: </strong>
                {this.state.numOfCreatedPatterns}
              </p>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default UserInfo;
