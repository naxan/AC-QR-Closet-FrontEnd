import React from "react";
import Routes from "../../config/routes";
import UserAuthAPI from "../../api/UserAuthAPI";

class App extends React.Component {
  state = {
    user: "",
    id: "",
    loggedIn: false,
  };

  componentDidMount = () => {
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

  render() {
    return (
      <div className="App">
        <Routes user={this.state.user} id={this.state.id} />
      </div>
    );
  }
}

export default App;
