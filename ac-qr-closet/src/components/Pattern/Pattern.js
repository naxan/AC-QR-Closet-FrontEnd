import React from "react";
import { Card, Image, Dropdown } from "semantic-ui-react";
import "./Pattern.css";
import EditPattern from "../ModalForms/EditPattern/EditPattern";
import DeletePattern from "../ModalForms/DeletePattern/DeletePattern";

// --- PROPS RECEIVED ---
// PATTERNCONTAINER:
// pattern object, userOwned

class Pattern extends React.Component {
  handleDelete = () => {
    let patternId = this.props.pattern._id;
    this.props.handleDelete(patternId);
  };

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
                  <EditPattern />
                  <DeletePattern handleDelete={this.handleDelete} />
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Card.Header>
          <Card.Description>{pattern.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>{pattern.textCode}</Card.Content>
      </Card>
    );
  }
}

export default Pattern;
