import React, { useState, useEffect } from "react";

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const handleImageChange = e => {
    console.log("handleImageChange");
    // e.preventDefault();

    // FileList to Array
    let newFiles = Array.from(e.target.files);

    // File Reader for Each file and and update state arrays
    newFiles.forEach((files, i) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        setFiles(prevFiles => [...prevFiles, files]);
        setImages(prevImages => [...prevImages, reader.result]);
      };
      console.log("files", files);
      reader.readAsDataURL(files);
    });
  };

  useEffect(() => {
    setImages(images);
  }, [images]);

  return (
    <div>
      <label
        className="btn btn-default btn-sm z-depth-0 mr-0 pl-2 pr-2 custom-file-upload waves-effect waves-light"
        htmlFor="file"
      >
        <i className="fas fa-image fa-fw" aria-hidden="true" />
        <input
          className="upload"
          type="file"
          onChange={handleImageChange}
          multiple
        />
      </label>
      <div>
        {images.map((images, i) => {
          return (
            <div key={i}>
              <img type="url" src={images} alt="a" />;
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ImageUploader;
