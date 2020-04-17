import React from "react";

class UploadImage extends React.Component {
  state = {
    uploadedImage: null,
  };

  setDefaultImage() {
    this.setState({
      uploadedImage: null,
    });
  }

  uploadImage(e) {
    let imageFormObj = new FormData();
    imageFormObj.append("imageName", "image-" + Date.now());
    imageFormObj.append("imageData", e.target.files[0]);

    this.setState({
      uploadedImage: URL.createObjectURL(e.target.files[0]),
    });

    fetch("http://localhost:4000/image/uploadmulter", {
      method: "POST",
      body: imageFormObj,
    }).then((data) => {
      console.log(data);
      if (data.ok) {
        alert("Image has been successfully uploaded!");
        this.setDefaultImage();
      }
    });
  }

  render() {
    return (
      <div className="process">
        <input type="file" onChange={(e) => this.uploadImage(e)} />
        <img src={this.state.uploadedImage} alt="upload-image" />
      </div>
    );
  }
}

export default UploadImage;
