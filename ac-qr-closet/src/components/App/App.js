import React from "react";
import Routes from "../../config/routes";
import UserAuthAPI from "../../api/UserAuthAPI";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = {
    user: "",
    id: "",
    loggedIn: false,
    dataRendered: false,
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
          dataRendered: true,
        });
      }
    });
  };

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
    if (!this.state.dataRendered) {
      return null;
    }
    return (
      <div className="App">
        <Navbar
          loggedIn={this.state.loggedIn}
          verifyUser={this.verifyUser}
          handleLogout={this.handleLogout}
        />
        <Routes user={this.state.user} id={this.state.id} />
        <Footer />
      </div>
    );
  }
}

export default App;
