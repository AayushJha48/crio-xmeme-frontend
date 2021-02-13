import React, { useState } from "react";
import AddMeme from "./components/addMeme";
import "./App.css";
import MemeContainer from "./components/memecontainer";
import UpdateMeme from "./components/updateMeme";

const App = () => {
  const [flag, setFlag] = useState(0);
  const [updtMemeCont, setupdtMemeCont] = useState(undefined);

  return (
    <div>
      {updtMemeCont ? (
        <UpdateMeme
          updtMemeCont={updtMemeCont}
          setupdtMemeCont={setupdtMemeCont}
          flag={flag}
          setFlag={setFlag}
        />
      ) : (
        <div>
          <AddMeme flag={flag} setFlag={setFlag} />
          <MemeContainer flag={flag} setupdtMemeCont={setupdtMemeCont} />
        </div>
      )}
    </div>
  );
};

export default App;
