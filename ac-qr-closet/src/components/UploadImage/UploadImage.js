import React from "react";
import { Button } from "semantic-ui-react";
import "./UploadImage.css";

const endpoint = "http://localhost:4000";

class UploadImage extends React.Component {
  state = {
    uploadedImage: null,
    uploadedImageURL: null,
    uploadStatus: null,
  };

  setDefaultImage() {
    this.setState({
      uploadedImage: null,
    });
  }

  handleFileSelect = (e) => {
    this.setState({
      uploadedImage: e.target.files[0],
      uploadedImageURL: URL.createObjectURL(e.target.files[0]),
    });
  };

  uploadImage = () => {
    let imageFormObj = new FormData();
    imageFormObj.append("imageName", "image-" + Date.now());
    imageFormObj.append("imageData", this.state.uploadedImage);

    fetch(`${endpoint}/image/upload`, {
      method: "POST",
      body: imageFormObj,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.ok) {
          this.setState({
            uploadStatus: "Image has been successfully uploaded!",
          });
        }
      });
  };

  render() {
    return (
      <div className="process">
        <input
          style={{ display: "none" }}
          type="file"
          onChange={(e) => this.handleFileSelect(e)}
          ref={(fileInput) => (this.fileInput = fileInput)}
        />
        <Button onClick={() => this.fileInput.click()}>Pick File</Button>
        <Button onClick={this.uploadImage}>Upload</Button>
        <h3>{this.state.uploadStatus}</h3>
        {this.state.uploadedImageURL && (
          <img
            className="uploaded-image"
            src={this.state.uploadedImageURL}
            alt="upload-image"
          />
        )}
      </div>
    );
  }
}

export default UploadImage;
