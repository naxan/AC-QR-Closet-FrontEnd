import React from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import "./EditAccount.css";
import UserAPI from "../../api/UserAPI";
import DeleteUser from "../ModalForms/DeleteUser/DeleteUser";

// --- PROPS RECEIVED ---
// APP
// id, user

class EditAccount extends React.Component {
  state = {
    username: "",
    authorCode: "",
    town: "",
    uploadedImage: null,
    uploadedImageURL: "http://localhost:4000/uploads/default.jpg",
    imageError: false,
    usernameError: "",
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
    // USERNAME CHECK: Checks if user has changed their username
    if (this.props.user === this.state.username) {
      // IMAGE CHECK: Checks if user has selected image to upload, and uploads if true
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
              authorCode: this.state.authorCode,
              town: this.state.town,
              profilePic: data,
            };
            UserAPI.update(this.props.id, updatedUser).then((res) =>
              this.props.history.push("/profile")
            );
          })
          .catch((err) => {
            this.setState({
              imageError: true,
            });
          });
        // IMAGE CHECK: If no image is selected, do not upload. Only change text information
      } else {
        let updatedUser = {
          authorCode: this.state.authorCode,
          town: this.state.town,
        };
        UserAPI.update(this.props.id, updatedUser).then((res) =>
          this.props.history.push("/profile")
        );
      }
      // USERNAME CHECK: If username has been changed, check if username is available
    } else {
      UserAPI.checkUsername(this.state.username).then((res) => {
        // If username has been taken, save error message to display
        if (!res.ok) {
          this.setState({
            usernameError: res.message,
          });
          // If username is not taken, we can now update the user info
        } else {
          // IMAGE CHECK: Checks if user has selected image to upload, and uploads if true
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
              })
              .catch((err) => {
                this.setState({
                  imageError: true,
                });
              });
            // IMAGE CHECK: If no image is selected, do not upload. Only change text information
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
        }
      });
    }
  };

  componentDidMount = () => {
    let userId = this.props.id;
    UserAPI.getOne(userId).then((res) => {
      if (res.profilePic) {
        this.setState({
          username: res.username,
          authorCode: res.authorCode,
          town: res.town,
          uploadedImageURL: "http://localhost:4000/" + res.profilePic.imageData,
        });
      } else {
        this.setState({
          username: res.username,
          authorCode: res.authorCode,
          town: res.town,
        });
      }
    });
  };

  render() {
    const { username, authorCode, town } = this.state;
    return (
      <div className="EditAccount">
        <h2>Account Information</h2>
        <Form>
          <Form.Field error={this.state.imageError}>
            <label>Profile Picture</label>
            <Form.Input
              style={{ display: "none" }}
              error={
                this.state.imageError
                  ? "Selected image file size is too large"
                  : null
              }
            />
          </Form.Field>
          <div className="image-btns">
            <input
              label="Image"
              style={{ display: "none" }}
              type="file"
              onChange={(e) => this.handleFileSelect(e)}
              ref={(fileInput) => (this.fileInput = fileInput)}
            />
            <Button onClick={() => this.fileInput.click()}>Choose File</Button>
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
            error={this.state.usernameError ? this.state.usernameError : null}
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
          <Form.Button type="submit">Submit Changes</Form.Button>
        </Form>
        <div className="actions">
          <h2>Account Actions</h2>
          <DeleteUser id={this.props.id} />
        </div>
      </div>
    );
  }
}

export default withRouter(EditAccount);
