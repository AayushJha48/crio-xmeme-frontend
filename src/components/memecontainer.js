import React, { useState, useEffect } from "react";
import Meme from "./meme";
import { getMemes } from "./helper/apicalls";

const MemeContainer = ({ flag }) => {
  const [memes, setMemes] = useState([]);

  const preload = () => {
    getMemes().then((memes) => {
      if (memes.error) {
        console.log(memes.error);
      } else {
        setMemes(memes);
        console.log(memes);
      }
    });
  };

  useEffect(() => {
    preload();
  }, [flag]);
  return (
    <div className="row">
      {memes &&
        memes.map((meme) => (
          <Meme
            key={meme.id}
            author={meme.name}
            caption={meme.caption}
            url={meme.url}
          />
        ))}
    </div>
  );
};

export default MemeContainer;
