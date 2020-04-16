import React from "react";
import { Dropdown, Modal, Button } from "semantic-ui-react";

// --- PROPS RECEIVED ---
// PATTERN
// handleDelete, showDeleteModal, toggleModal

class DeletePattern extends React.Component {
  render() {
    return (
      <Modal
        open={this.props.showDeleteModal}
        onClose={this.props.toggleModal}
        trigger={
          <Dropdown.Item text="Delete" onClick={this.props.toggleModal} />
        }
        closeIcon
      >
        <Modal.Header>
          Are you sure you want to delete this pattern?
        </Modal.Header>
        <Modal.Content>
          <Button onClick={this.props.handleDelete} color={"red"}>
            DELETE
          </Button>
          <Button onClick={this.props.toggleModal}>Cancel</Button>
        </Modal.Content>
      </Modal>
    );
  }
}

export default DeletePattern;
