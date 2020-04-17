import React from "react";
import { Dropdown, Modal, Form } from "semantic-ui-react";

// --- PROPS RECEIVED ---
// NAVBAR
// TO DO: ADD toggleModal, showCreateModal

class CreatePattern extends React.Component {
  state = {
    title: "",
    description: "",
    textCode: "",
    image: "",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  // handleEdit = () => {
  //   let editedPattern = {
  //     title: this.state.title,
  //     description: this.state.description,
  //     textCode: this.state.textCode,
  //     image: this.state.image,
  //   };

  //   this.props.handleEdit(editedPattern);
  // };

  // componentDidMount = () => {
  //   let pattern = this.props.pattern;
  //   this.setState({
  //     title: pattern.title,
  //     description: pattern.description,
  //     textCode: pattern.textCode,
  //     image: pattern.image,
  //   });
  // };

  render() {
    const { title, description, textCode, image } = this.state;
    return (
      <div className="CreatePattern">
        <Form>
          <Form.Input
            type="file"
            label="Image"
            name="image"
            onChange={this.handleChange}
            value={image}
          />
          <Form.Input
            label="Design Code"
            name="textCode"
            onChange={this.handleChange}
            value={textCode}
          />
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
          <Form.Button type="submit">Submit Design</Form.Button>
        </Form>
      </div>
    );
  }
}

export default CreatePattern;
