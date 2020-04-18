import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import UserAPI from "../../../api/UserAPI";
import "./DeleteUser.css";

// --- PROPS RECEIVED ---
//

class DeleteUser extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  handleUserDelete = () => {
    UserAPI.destroy(this.props.id).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <Modal
        className="DeleteUser"
        open={this.state.showModal}
        onClose={this.toggleModal}
        trigger={
          <Button
            icon
            labelPosition="left"
            color="red"
            onClick={this.toggleModal}
          >
            <Icon name="user delete" />
            DELETE ACCOUNT
          </Button>
        }
        closeIcon
      >
        <Modal.Header>
          <strong className="important">IMPORTANT</strong>
        </Modal.Header>
        <Modal.Content>
          <h3>Are you sure you want to delete your account?</h3>
          Your account information and patterns will be permanently removed upon
          deletion.
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleUserDelete} color={"red"}>
            Delete My Account
          </Button>
          <Button onClick={this.toggleModal}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteUser;
