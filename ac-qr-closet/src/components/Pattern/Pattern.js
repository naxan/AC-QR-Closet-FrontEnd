import React from "react";
import { Card, Image, Dropdown } from "semantic-ui-react";
import "./Pattern.css";
import EditPattern from "../ModalForms/EditPattern/EditPattern";
import DeletePattern from "../ModalForms/DeletePattern/DeletePattern";

// --- PROPS RECEIVED ---
// PATTERNCONTAINER:
// pattern object, userOwned

class Pattern extends React.Component {
  state = {
    showDeleteModal: false,
    showEditModal: false,
  };

  handleDelete = () => {
    let patternId = this.props.pattern._id;
    this.props.handleDelete(patternId);
    this.setState({
      showDeleteModal: false,
    });
  };

  handleEdit = (editedPattern) => {
    let patternId = this.props.pattern._id;
    this.props.handleEdit(patternId, editedPattern);
    this.setState({
      showEditModal: false,
    });
  };

  toggleDeleteModal = () => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal,
    });
  };

  toggleEditModal = () => {
    this.setState({
      showEditModal: !this.state.showEditModal,
    });
  };

  render() {
    let pattern = this.props.pattern;
    return (
      <Card className="Pattern">
        <Image
          src={"http://localhost:4000/" + pattern.image.imageData}
          wrapped
          ui={false}
        />
        <Card.Content extra>{pattern.textCode}</Card.Content>
        <Card.Content>
          <Card.Header>
            {pattern.title}
            {this.props.userOwned && (
              <Dropdown icon="caret down">
                <Dropdown.Menu>
                  <EditPattern
                    handleEdit={this.handleEdit}
                    pattern={this.props.pattern}
                    showEditModal={this.state.showEditModal}
                    toggleModal={this.toggleEditModal}
                  />
                  <DeletePattern
                    handleDelete={this.handleDelete}
                    showDeleteModal={this.state.showDeleteModal}
                    toggleModal={this.toggleDeleteModal}
                  />
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Card.Header>
          <Card.Description>{pattern.description}</Card.Description>
        </Card.Content>
        {!this.props.userOwned && (
          <Card.Content extra>
            Created by:{" "}
            <a className="username">{this.props.pattern.author.username}</a>
          </Card.Content>
        )}
      </Card>
    );
  }
}

export default Pattern;
