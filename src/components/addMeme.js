import React, {useState} from 'react';
import { postMeme } from './helper/apicalls';

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
    //TODO: Input validation goes here

    postMeme({name, caption, url})
    .then((response) => {
      if(response.status === 500 ) {
        console.log('Something wrong please try again later');
      } else if (response.status === 409) {
        console.log('Resource already exists');
      } else if (response.status === 201) {
        setFlag(!flag);
        console.log('Flag value changed!')
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
      </div>
  )
}

export default AddMeme;
