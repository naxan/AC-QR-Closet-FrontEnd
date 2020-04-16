import React from "react";
import { Card, Icon, Image, Dropdown } from "semantic-ui-react";
import "./Pattern.css";

// --- PROPS RECEIVED ---
// PATTERNCONTAINER:
// pattern object, userOwned

class Pattern extends React.Component {
  render() {
    let pattern = this.props.pattern;
    return (
      <Card>
        <Image src={pattern.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {pattern.title}
            {this.props.userOwned && (
              <Dropdown icon="caret down">
                <Dropdown.Menu>
                  <Dropdown.Item text="Edit" />
                  <Dropdown.Item text="Delete" />
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Card.Header>
          {/* <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta> */}
          <Card.Description>{pattern.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>{pattern.textCode}</Card.Content>
      </Card>
    );
  }
}

export default Pattern;
