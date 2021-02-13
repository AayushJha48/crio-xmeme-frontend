import React, { useState, useEffect } from "react";
import Meme from "./meme";
import { getMemes } from "./helper/apicalls";

const MemeContainer = ({ flag, setupdtMemeCont }) => {
  const [memes, setMemes] = useState([]);

  const preload = () => {
    getMemes().then((memes) => {
      if (memes.error) {
        console.log(memes.error);
      } else {
        setMemes(memes);
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
            id={meme.id}
            author={meme.name}
            caption={meme.caption}
            url={meme.url}
            setupdtMemeCont={setupdtMemeCont}
          />
        ))}
    </div>
  );
};

export default MemeContainer;
