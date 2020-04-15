import React from "react";
import Routes from "../../config/routes";
import UserAuthAPI from "../../api/UserAuthAPI";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = {
    user: "",
    id: "",
    loggedIn: false,
  };

  componentDidMount = () => {
    this.verifyUser();
  };

  verifyUser = () => {
    UserAuthAPI.verify().then((res) => {
      if (res.currentUser) {
        this.setState({
          user: res.currentUser.username,
          id: res.currentUser._id,
          loggedIn: true,
        });
      }
    });
  };

  handleSignUp = (username, password, confirmedPassword) => {
    if (password === confirmedPassword) {
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

  // handleLogin = (username, password) => {
  //   let user = {
  //     username: username,
  //     password: password,
  //   };

  //   UserAuthAPI.login(user).then((res) => {
  //     console.log(res);
  //     if (res.status === 200) {
  //       this.verifyUser();
  //     }
  //   });
  // };

  handleLogout = () => {
    UserAuthAPI.logout().then((res) => {
      console.log(res);
      if (res.status === 200) {
        this.setState({
          user: "",
          id: "",
          loggedIn: false,
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Button onClick={this.handleLogout}>Logout Test</Button>
        <Button onClick={() => this.handleLogin("sailorMoon", "sailorMoon")}>
          Login Test
        </Button>
        <Navbar
          loggedIn={this.state.loggedIn}
          verifyUser={this.verifyUser}
          // handleLogout={this.handleLogout}
          // handleSignUp={this.handleSignUp}
        />
        <Routes user={this.state.user} id={this.state.id} />
        <Footer />
      </div>
    );
  }
}

export default App;
