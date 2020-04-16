import React from "react";
import { Dropdown, Modal, Form } from "semantic-ui-react";

// --- PROPS RECEIVED ---
// PATTERN
// handleEdit, pattern object

class EditPattern extends React.Component {
  state = {
    title: "",
    description: "",
    textCode: "",
    image: "",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleEdit = () => {
    let editedPattern = {
      title: this.state.title,
      description: this.state.description,
      textCode: this.state.textCode,
      image: this.state.image,
    };

    this.props.handleEdit(editedPattern);
  };

  componentDidMount = () => {
    let pattern = this.props.pattern;
    this.setState({
      title: pattern.title,
      description: pattern.description,
      textCode: pattern.textCode,
      image: pattern.image,
    });
  };

  render() {
    const { title, description, textCode, image } = this.state;
    return (
      <Modal trigger={<Dropdown.Item text="Edit" />} closeIcon>
        <Modal.Header>Edit Your Pattern</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleEdit}>
            <Form.Input
              label="Title"
              name="title"
              onChange={this.handleChange}
              value={title}
            />
            <Form.Input
              label="Description"
              name="description"
              onChange={this.handleChange}
              value={description}
            />
            <Form.Input
              label="Design Code"
              name="textCode"
              onChange={this.handleChange}
              value={textCode}
            />
            <Form.Input
              label="Image"
              name="image"
              onChange={this.handleChange}
              value={image}
            />
            <Form.Button type="submit">Submit Changes</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default EditPattern;
