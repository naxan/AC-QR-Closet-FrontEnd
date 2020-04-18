import React from "react";
import { Modal, Form, Button, Menu } from "semantic-ui-react";
import UserAuthAPI from "../../../api/UserAuthAPI";

// --- PROPS RECEIVED ---
// NAVBAR:
// verifyUser

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    showModal: false,
    usernameError: "",
    passwordError: "",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

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
        if (res.status === 400) {
          this.setState({
            usernameError: res.message,
          });
        }
        if (res.status === 201) {
          UserAuthAPI.login(newUser).then((res) => {
            console.log(res);
            if (res.ok) {
              this.props.verifyUser();
              this.setState({
                showModal: false,
              });
            }
          });
        }
      });
    } else {
      this.setState({
        passwordError:
          "Your password and password confirmation fields do not match.",
      });
    }
  };

  render() {
    const { username, password, confirmPassword } = this.state;
    return (
      <div className="Login">
        <Modal
          open={this.state.showModal}
          onClose={this.toggleModal}
          trigger={<Menu.Item onClick={this.toggleModal}>Sign Up</Menu.Item>}
          closeIcon
        >
          <Modal.Header>Sign Up</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSignUp}>
              <Form.Input
                required
                error={
                  this.state.usernameError ? this.state.usernameError : null
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
                error={
                  this.state.passwordError ? this.state.passwordError : null
                }
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
