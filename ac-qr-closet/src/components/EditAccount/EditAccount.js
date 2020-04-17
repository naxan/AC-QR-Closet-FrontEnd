import React from "react";
import { Form, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import "./EditAccount.css";
import UserAPI from "../../api/UserAPI";

// --- PROPS RECEIVED ---
// APP
// id

class EditAccount extends React.Component {
  state = {
    username: "",
    authorCode: "",
    town: "",
    uploadedImage: null,
    uploadedImageURL: "http://localhost:4000/uploads/default.jpg",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      this.setState({
        uploadedImage: e.target.files[0],
        uploadedImageURL: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  handleUpdate = () => {
    console.log(this.state.uploadedImage);
    if (this.state.uploadedImage) {
      let imageFormObj = new FormData();
      imageFormObj.append("imageName", "image-" + Date.now());
      imageFormObj.append("imageData", this.state.uploadedImage);
      fetch("http://localhost:4000/image/upload", {
        method: "POST",
        body: imageFormObj,
      })
        .then((res) => res.json())
        .then((data) => {
          let updatedUser = {
            username: this.state.username,
            authorCode: this.state.authorCode,
            town: this.state.town,
            profilePic: data,
          };
          UserAPI.update(this.props.id, updatedUser).then((res) =>
            this.props.history.push("/profile")
          );
        });
    } else {
      let updatedUser = {
        username: this.state.username,
        authorCode: this.state.authorCode,
        town: this.state.town,
      };
      UserAPI.update(this.props.id, updatedUser).then((res) =>
        this.props.history.push("/profile")
      );
    }
  };

  componentDidMount = () => {
    let userId = this.props.id;
    UserAPI.getOne(userId).then((res) => {
      this.setState({
        username: res.username,
        authorCode: res.authorCode,
        town: res.town,
        uploadedImageURL: "http://localhost:4000/" + res.profilePic.imageData,
      });
    });
  };

  render() {
    const { username, authorCode, town } = this.state;
    return (
      <div className="EditAccount">
        <Form>
          <Form.Field>
            <label>Profile Picture</label>
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
          {this.state.uploadedImageURL && (
            <img
              className="uploaded-image"
              src={this.state.uploadedImageURL}
              alt="upload-image"
            />
          )}
        </Form>
        <Form onSubmit={this.handleUpdate}>
          <Form.Input
            label="Change Username"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
          <Form.Input
            label="Creator ID"
            name="authorCode"
            onChange={this.handleChange}
            value={authorCode}
          />
          <Form.Input
            label="Town Name"
            name="town"
            onChange={this.handleChange}
            value={town}
          />
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(EditAccount);
