import React, { useState } from "react";
import { updateMeme } from "./helper/apicalls";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateMeme = ({ updtMemeCont, setupdtMemeCont }) => {
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
    if(!!caption.trim() === false || !!url.trim() === false) {
      return toast.error('Please enter value in all fields.')
    }

    updateMeme({ id: updtMemeCont.id, caption, url })
    .then((response) => {
      if(response.status === 500) {
        toast.error('Something wrong on server please update meme later');
      } else if (response.status === 200) {
        toast.success('Meme is updated successfully');
      } else if (response.status === 404) {
        toast.warn('No such meme exists');
      }
        setCaption('');
        setUrl('');
        setTimeout(() => {
          setupdtMemeCont(undefined);
        }, 5500)
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
      <h2 className="text text-center mt-5">Update Meme</h2>
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
      <ToastContainer />
    </div>
  );
};

export default UpdateMeme;
