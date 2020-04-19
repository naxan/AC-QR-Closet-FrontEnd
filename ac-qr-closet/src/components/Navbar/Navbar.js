import React from "react";
import Login from "../ModalForms/Login/Login";
import SignUp from "../ModalForms/SignUp/SignUp";
import { Menu, Button, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";

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
            active={activeItem === "LaBelle Boutique"}
            name="LaBelle Boutique"
            as={Link}
            to="/"
          >
            LaBelle Boutique
          </Menu.Item>
          {this.props.loggedIn && (
            <Button as={Link} to="/newDesign" icon labelPosition="left">
              <Icon name="pencil" />
              ADD DESIGN
            </Button>
          )}

          <Menu.Menu position="right">
            {this.props.loggedIn && (
              <>
                <Menu.Item
                  name="Home"
                  as={Link}
                  to="/"
                  onClick={this.handleLinkClick}
                  active={activeItem === "Home"}
                >
                  Design Library
                </Menu.Item>
                <Menu.Item
                  name="Profile"
                  as={Link}
                  to="/profile"
                  onClick={this.handleLinkClick}
                  active={activeItem === "Profile"}
                >
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
