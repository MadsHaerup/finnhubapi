import { useState } from "react";
// import Economic from "./Components/Economic";
import Sentiment from "./Components/Sentiment";
import StockChart from "./Components/StockChart";
require('dotenv').config();

function App() {
  const [ticker, setTicker] = useState(" ");

  const handleInput = (event) => {
    setTicker(event.target.value);
  };

  return (
    <div className="App">
      <input type="text"  onKeyPress={(e) => e.key === "Enter" ? handleInput(e) : null}  />
      {/* <Economic/> */}
      <Sentiment ticker={ticker}/>
      <StockChart ticker={ticker}/>
    </div>
  );
}

export default App;
