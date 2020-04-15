import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import UserAuthAPI from "../../../api/UserAuthAPI";

// --- PROPS RECEIVED ---
// NAVBAR:
// handleSignUp

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSignUp = () => {
    let username = this.state.username;
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;

    if (password === confirmPassword) {
      let newUser = {
        username: username,
        password: password,
      };

      UserAuthAPI.signUp(newUser).then((res) => {
        console.log(res);
      });
    } else {
      console.log(
        "Your password and password confirmation fields do not match."
      );
    }
  };

  render() {
    const { username, password, confirmPassword } = this.state;
    return (
      <div className="Login">
        <Modal trigger={<Button>Sign Up</Button>}>
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
            <Form
              onSubmit={() =>
                this.props.handleSignUp(username, password, confirmPassword)
              }
            >
              <Form.Input
                required
                error={
                  this.state.usernameError ? "Please enter your username" : null
                }
                label="Username"
                placeholder="Username"
                id="form-input-username"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <Form.Input
                required
                label="Password"
                id="form-input-password"
                name="password"
                value={password}
                type="password"
                onChange={this.handleChange}
              />
              <Form.Input
                required
                label="Confirm Password"
                id="form-input-confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                type="password"
                onChange={this.handleChange}
              />
              <Button type="submit">Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
