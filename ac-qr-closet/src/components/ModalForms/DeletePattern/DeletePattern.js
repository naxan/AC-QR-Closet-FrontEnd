import React from "react";
import { Dropdown, Modal, Button } from "semantic-ui-react";

// --- PROPS RECEIVED ---
// PATTERN
// handleDelete

class DeletePattern extends React.Component {
  render() {
    return (
      <Modal trigger={<Dropdown.Item text="Delete" />} closeIcon>
        <Modal.Header>
          Are you sure you want to delete this pattern?
        </Modal.Header>
        <Modal.Content>
          <Button onClick={this.props.handleDelete} color={"red"}>
            Yes
          </Button>
          <Button>No</Button>
        </Modal.Content>
      </Modal>
    );
  }
}

export default DeletePattern;
