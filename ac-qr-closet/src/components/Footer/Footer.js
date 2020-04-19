import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <p>Thanks for visiting!</p>
        <p>
          Background image supplied by{" "}
          <a href="https://catwithmonocle.com/">Cat With Monocle</a>. Several
          vector graphics supplied by{" "}
          <a href="https://www.vecteezy.com/">Vecteezy</a>.
        </p>
        <p>
          Visit me on Github!{" "}
          <Menu.Item
            href="https://github.com/naxan"
            target="_blank"
            style={{ display: "inline" }}
          >
            <Icon id="github-icon" name="github" />
          </Menu.Item>
        </p>
      </div>
    );
  }
}

export default Footer;
