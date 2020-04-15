import React from "react";
import Login from "../ModalForms/Login/Login";
import SignUp from "../ModalForms/SignUp/SignUp";

// --- PROPS RECEIVED ---
// APP:
// loggedIn, verifyUser

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <Login verifyUser={this.props.verifyUser} />
        <SignUp handleSignUp={this.props.handleSignUp} />
      </div>
    );
  }
}

export default Navbar;
