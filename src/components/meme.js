import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Meme = ({id, author, caption, url, setupdtMemeCont }) => {

  const handleClick = () => {
    setupdtMemeCont({
      id,
      author,
      caption,
      url
    });
  }

  return (
    <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-start my-5">
      <div className="card" style={{ width: "90%" }}>
        <img
          style={{ maxHeight: "75vh" }}
          src={url}
          className="card-img"
          alt="a meme url unable to be loaded"
        />
        <div className="card-body">
          <p className="card-info">{caption}</p>
          <div className="d-flex align-items-baseline justify-content-between">
          <button
            style={{
              border: "none",
              focus: "none",
              background: "transparent",
              outline: "none",
            }}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <h5 className="card-title text-right">{author}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meme;
