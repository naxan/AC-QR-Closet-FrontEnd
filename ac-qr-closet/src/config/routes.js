import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import CreatePattern from "../components/CreatePattern/CreatePattern";
import EditAccount from "../components/EditAccount/EditAccount";

// --- PROPS RECEIVED ---
// APP:
// user, id, loggedIn
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/profile"
          render={() =>
            this.props.loggedIn ? (
              <Profile user={this.props.user} id={this.props.id} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/newDesign"
          render={() =>
            this.props.loggedIn ? (
              <CreatePattern user={this.props.user} id={this.props.id} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/Account"
          render={() =>
            this.props.loggedIn ? (
              <EditAccount id={this.props.id} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>
    );
  }
}

export default Routes;
