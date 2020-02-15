import React, { useState } from "react";

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const handleImageChange = e => {
    console.log("handleImageChange");
    // FileList to Array
    let fileList = Array.from(e.target.files);
    console.log("fileList", fileList);
    // File Reader for Each file and and update state arrays
    fileList.forEach((files, i) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        setFiles(prevFiles => [...prevFiles, files]);
        setImages(prevImages => [...prevImages, reader.result]);
      };

      reader.readAsDataURL(files);
    });
  };

  return (
    <div>
      <input
        className="upload"
        type="file"
        onChange={handleImageChange}
        multiple
      />
      <div>
        {images.map((images, i) => {
          return (
            <div key={i}>
              <img type="url" style={{ width: "80%" }} src={images} alt="a" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ImageUploader;
