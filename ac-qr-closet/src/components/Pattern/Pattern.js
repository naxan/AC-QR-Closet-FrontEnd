import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

// --- PROPS RECEIVED ---
// PATTERNCONTAINER:
// pattern object

class Pattern extends React.Component {
  render() {
    let pattern = this.props.pattern;
    console.log(pattern);
    return (
      <Card>
        <Image src={pattern.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{pattern.title}</Card.Header>
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
