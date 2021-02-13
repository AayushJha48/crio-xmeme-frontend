import React, { useState } from "react";
import { updateMeme } from "./helper/apicalls";

const UpdateMeme = ({ updtMemeCont, setupdtMemeCont, flag, setFlag }) => {
  const [caption, setCaption] = useState(updtMemeCont.caption);
  const [url, setUrl] = useState(updtMemeCont.url);

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //TODO: Input validation goes here

    updateMeme({ id: updtMemeCont.id, caption, url })
    .then((response) => {
        console.log(response);
        setCaption('');
        setUrl('');
        setupdtMemeCont(undefined);
        setFlag(!flag);
    })
    .catch((err) => {
      console.log(err);
      setCaption('');
      setUrl('');
      setupdtMemeCont(undefined);
    })
  };

  const onCancel = (event) => {
      event.preventDefault();
      setCaption('');
      setUrl('');
      setupdtMemeCont(undefined)
  }

  return (
    <div>
      <h2 className="text text-center mt-5">Meme Stream</h2>
      <div className="ml-5 mr-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form className="form-group">
              <div className="form-group">
                <label>Caption</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add caption describing image"
                  name=""
                  value={caption}
                  onChange={handleCaptionChange}
                />
              </div>
              <div className="form-group">
                <label>Meme URL</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter URL"
                  name=""
                  value={url}
                  onChange={handleUrlChange}
                />
              </div>
              <div className="d-flex justify-content-between">
              <button className="btn btn-primary" onClick={onSubmit}>
                Submit Meme
              </button>
              <button className="btn btn-outline-danger" onClick={onCancel}>
                Cancel
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMeme;
