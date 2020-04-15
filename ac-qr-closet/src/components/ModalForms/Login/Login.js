import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import UserAuthAPI from "../../../api/UserAuthAPI";

// --- PROPS RECEIVED ---
// NAVBAR:
// verifyUser

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleLogin = () => {
    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    UserAuthAPI.login(user).then((res) => {
      if (res.status === 200) {
        this.setState({
          username: "",
          password: "",
        });
        this.props.verifyUser();
      }
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="Login">
        <Modal trigger={<Button>Login</Button>}>
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
            <Form onSubmit={() => this.handleLogin(username, password)}>
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
              <Button type="submit">Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default Login;
