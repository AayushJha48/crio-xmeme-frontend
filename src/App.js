import React, {useState} from "react";
import AddMeme from "./components/addMeme";
import './App.css';
import MemeContainer from "./components/memecontainer";

const App = () => {

  const [flag, setFlag] = useState(0);

  return (
    <div>
      <AddMeme flag={flag} setFlag={setFlag} />
      <MemeContainer flag={flag} />
    </div>
  )
}

export default App;
