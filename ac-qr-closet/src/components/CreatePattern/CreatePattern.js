import React from "react";
import { Form, Button, Card, Image } from "semantic-ui-react";
import "./CreatePattern.css";
import "../Pattern/Pattern.css";
import PatternAPI from "../../api/PatternAPI";
import { withRouter } from "react-router-dom";

// --- PROPS RECEIVED ---
// APP
// id

class CreatePattern extends React.Component {
  state = {
    title: "",
    description: "",
    textCode: "",
    uploadedImage: null,
    uploadedImageURL: "http://localhost:4000/uploads/default.jpg",
  };

  handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      this.setState({
        uploadedImage: e.target.files[0],
        uploadedImageURL: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleCreate = () => {
    let imageFormObj = new FormData();
    imageFormObj.append("imageName", "image-" + Date.now());
    imageFormObj.append("imageData", this.state.uploadedImage);

    fetch("http://localhost:4000/image/upload", {
      method: "POST",
      body: imageFormObj,
    })
      .then((res) => res.json())
      .then((data) => {
        let newPattern = {
          title: this.state.title,
          description: this.state.description,
          textCode: this.state.textCode,
          image: data,
        };
        PatternAPI.create(this.props.id, newPattern).then((res) =>
          this.props.history.push("/profile")
        );
      });
  };

  render() {
    const { title, description, textCode } = this.state;
    return (
      <div className="CreatePattern">
        <div className="design-form">
          <Form>
            <Form.Field>
              <label>Pattern Image</label>
            </Form.Field>
            <div className="image-btns">
              <input
                label="Image"
                style={{ display: "none" }}
                type="file"
                onChange={(e) => this.handleFileSelect(e)}
                ref={(fileInput) => (this.fileInput = fileInput)}
              />
              <Button onClick={() => this.fileInput.click()}>Pick File</Button>
            </div>
            {/* {this.state.uploadedImageURL && (
            <img
              className="uploaded-image"
              src={this.state.uploadedImageURL}
              alt="upload-image"
            />
          )} */}
          </Form>
          <Form onSubmit={this.handleCreate}>
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

        <div className="example-pattern">
          <Card className="Pattern">
            <Image src={this.state.uploadedImageURL} wrapped ui={false} />
            <Card.Content extra>{this.state.textCode}</Card.Content>
            <Card.Content>
              <Card.Header>{this.state.title}</Card.Header>
              <Card.Description>{this.state.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              Created by: <a className="username">{this.props.user}</a>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(CreatePattern);
