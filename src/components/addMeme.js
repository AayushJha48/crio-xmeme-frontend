import React, {useState} from 'react';
import { postMeme } from './helper/apicalls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddMeme = ({
  flag,
  setFlag
}) => {

  const [name, setName] = useState('');
  const [caption, setCaption] = useState('');
  const [url, setUrl] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(!!name.trim() === false || !!caption.trim() === false || !!url.trim() === false) {
      return toast.error('Please enter value in all fields.')
    }

    postMeme({name, caption, url})
    .then((response) => {
      if(response.status === 500 ) {
        toast.error('Something wrong on server please add meme later');
      } else if (response.status === 409) {
        toast.warn('This meme already exists');
      } else if (response.status === 201) {
        toast.success('Your meme is added successfully');
        setFlag(!flag);
      }
    })
    .catch((err) => console.log(err));
    setName('');
    setCaption('');
    setUrl('');
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
                  <label>Meme Author Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Author Name"
                    name=""
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
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
                <button className="btn btn-primary" onClick={onSubmit}>Submit Meme</button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
  )
}

export default AddMeme;
