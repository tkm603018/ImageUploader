import React, { useState } from "react";

const ImageUploader = () => {
  // this.state = { file: '', imagePreviewUrl: '' };
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleSubmit = e => {
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", file);
  };

  const handleImageChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = e => {
      console.log("loadend", e);
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const newState = {
    file: file,
    imagePreviewUrl: imagePreviewUrl
  };

  console.log("file", file);

  return (
    <div className="previewComponent">
      <form onSubmit={e => handleSubmit(e)}>
        <input
          className="fileInput"
          type="file"
          onChange={e => handleImageChange(e)}
        />
        <button
          className="submitButton"
          type="submit"
          onClick={e => handleSubmit(e)}
        >
          Upload Image
        </button>
      </form>
      <div className="imgPreview">
        {newState ? (
          <img type="url" src={imagePreviewUrl} alt="アイコン" />
        ) : (
          <div className="previewText">Please select an Image for Preview</div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
