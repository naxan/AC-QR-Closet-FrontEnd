import React from "react";
import { Modal, Form, Menu } from "semantic-ui-react";
import UserAuthAPI from "../../../api/UserAuthAPI";

// --- PROPS RECEIVED ---
// NAVBAR:
// verifyUser

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    showModal: false,
    usernameError: false,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  handleLogin = () => {
    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    UserAuthAPI.login(user).then((res) => {
      if (!res.ok) {
        this.setState({
          usernameError: true,
        });
      }
      if (res.ok) {
        this.setState({
          username: "",
          password: "",
          showModal: false,
        });
        this.props.verifyUser();
      }
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="Login">
        <Modal
          open={this.state.showModal}
          onClose={this.toggleModal}
          trigger={<Menu.Item onClick={this.toggleModal}>Login</Menu.Item>}
          closeIcon
        >
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
            <Form onSubmit={() => this.handleLogin(username, password)}>
              <Form.Input
                required
                error={
                  this.state.usernameError
                    ? "Username or password is incorrect"
                    : null
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
              <Form.Button type="submit">Submit</Form.Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default Login;
