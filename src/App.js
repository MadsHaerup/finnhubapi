import { useState } from "react";
import IpoCalender from "./Pages/IpoCalendar";
import Economic from "./Components/Economic";
import Stock from "./Pages/Stock";
import { Router } from "@reach/router";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

require('dotenv').config();

function App() {
  const [ticker, setTicker] = useState(" ");

  const handleInput = (event) => {
    setTicker(event.target.value);
  };

  return (
    <div className="App">
      <Navbar
      ipo="Ipo"
      ipoLink="ipocalendar"
      stock="Stocks"
      stockLink="stocks"
      economic="Economic Calendar"
      economicLink="economic"
      home="Home"
      homeLink="/"

      />
      <input type="text"  onKeyPress={(e) => e.key === "Enter" ? handleInput(e) : null}  />
      <Router>
        <Home path="/"/>
        <Stock ticker={ticker} path="stocks"/>
        <Economic path="economic"/>
        <IpoCalender path="ipocalendar"/>
      </Router>
    </div>
  );
}

export default App;
