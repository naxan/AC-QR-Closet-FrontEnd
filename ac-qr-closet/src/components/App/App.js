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
      console.log(res.currentUser);
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
        <Routes />
      </div>
    );
  }
}

export default App;
