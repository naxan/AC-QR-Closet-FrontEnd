import React from "react";
import { Card, Image, Header, Segment } from "semantic-ui-react";
import "./UserInfo.css";
import UserAPI from "../../api/UserAPI";

// --- PROPS RECEIVED ---
// PROFILE:
// user, id

class UserInfo extends React.Component {
  state = {
    town: "",
    numOfCreatedPatterns: 0,
  };

  getUserInfo = () => {
    UserAPI.getOne(this.props.id).then((res) =>
      this.setState({
        town: res.town,
        numOfCreatedPatterns: res.createdPatterns.length,
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
            <Image
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              size="small"
              circular
              inline={true}
            />

            <div>
              <h2>{this.props.user}</h2>
              <p>
                <strong>Town: </strong>
                {this.state.town || "PlaceHolder"}
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
