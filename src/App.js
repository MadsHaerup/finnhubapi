import { useState } from "react";
// import Economic from "./Components/Economic";
import Sentiment from "./Components/Sentiment";
require('dotenv').config();

function App() {
  const [name, setName] = useState(" ");

  const handleInput = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" onKeyPress={(e) => e.key === "Enter" ? handleInput(e) : null}  />
      {/* <Economic/> */}
      <Sentiment name={name}/>
    </div>
  );
}

export default App;
