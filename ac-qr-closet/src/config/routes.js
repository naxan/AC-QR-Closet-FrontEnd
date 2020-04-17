import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import CreatePattern from "../components/CreatePattern/CreatePattern";
import EditAccount from "../components/EditAccount/EditAccount";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/profile"
          render={() => <Profile user={this.props.user} id={this.props.id} />}
        />
        <Route
          path="/newDesign"
          render={() => <CreatePattern id={this.props.id} />}
        />
        <Route
          path="/Account"
          render={() => <EditAccount id={this.props.id} />}
        />
      </Switch>
    );
  }
}

export default Routes;
