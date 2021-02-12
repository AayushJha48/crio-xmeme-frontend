import React from "react";

const Meme = ({
    author,
    caption,
    url
}) => {

  return (
    <div class="col-lg-4 col-md-6 d-flex justify-content-center align-items-start my-5">
          <div class="card" style={{width: '90%'}}>
            <img
            style={{maxHeight: '75vh'}}
              src={url}
              class="card-img"
              alt='a meme url unable to be loaded'
            />
            <div class="card-body">
              <p class="card-info">{caption}</p>
              <h5 class="card-title text-right">{author}</h5>
            </div>
          </div>
        </div>
  )
}

export default Meme;