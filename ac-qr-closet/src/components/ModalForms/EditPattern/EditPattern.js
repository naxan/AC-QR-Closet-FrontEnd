import React from "react";
import { Dropdown, Modal, Form } from "semantic-ui-react";

// --- PROPS RECEIVED ---

class EditPattern extends React.Component {
  render() {
    return (
      <Modal trigger={<Dropdown.Item text="Edit" />} closeIcon>
        <Modal.Header>Edit Your Pattern</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input label="Title" />
            <Form.Input label="Description" />
            <Form.Input label="Design Code" />
            <Form.Input label="Image" />
            <Form.Button type="submit">Submit Changes</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default EditPattern;
