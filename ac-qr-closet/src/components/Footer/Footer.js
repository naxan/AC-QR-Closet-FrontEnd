import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <p>Thanks for visiting!</p>
        <p>This website was made by Anna Kempel</p>
        <Menu.Item href="https://github.com/naxan" target="_blank">
          <Icon id="github-icon" name="github" />
        </Menu.Item>
      </div>
    );
  }
}

export default Footer;
