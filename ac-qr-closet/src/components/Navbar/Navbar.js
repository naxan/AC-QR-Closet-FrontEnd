import React from "react";
import Login from "../ModalForms/Login/Login";
import SignUp from "../ModalForms/SignUp/SignUp";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

// --- PROPS RECEIVED ---
// APP:
// loggedIn, verifyUser, handleLogout

class Navbar extends React.Component {
  state = {
    activeItem: "",
  };

  handleLinkClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="Navbar">
        <Menu>
          <Menu.Item
            onClick={this.handleLinkClick}
            active={activeItem === "QR Closet"}
            name="QR Closet"
          >
            QR Closet
          </Menu.Item>

          <Menu.Menu position="right">
            {this.props.loggedIn && (
              <>
                <Menu.Item name="Home" as={Link} to="/">
                  Home
                </Menu.Item>
                <Menu.Item name="Profile" as={Link} to="/profile">
                  Profile
                </Menu.Item>
                <Menu.Item name="Log Out" onClick={this.props.handleLogout}>
                  Log Out
                </Menu.Item>
              </>
            )}
            {!this.props.loggedIn && (
              <>
                <Login verifyUser={this.props.verifyUser} />
                <SignUp verifyUser={this.props.verifyUser} />
              </>
            )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Navbar);
