import { useState } from "react";
import IpoCalender from "./Pages/IpoCalendar";
import Economic from "./Components/Economic";
import Stock from "./Pages/Stock";
import { Router } from "@reach/router";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/Home";
import { GlobalProvider } from "./context/GlobalState";
import Watchlist from './Pages/Watchlist';

require('dotenv').config();

function App() {
  const [ticker, setTicker] = useState(" ");

  const handleInput = (event) => {
    setTicker(event.target.value);
  };

  return (
    <GlobalProvider>
        <Navbar/>

        <input type="text"  onKeyPress={(e) => e.key === "Enter" ? handleInput(e) : null}  />

        <Router>
          <Home path="/"/>
          <Stock ticker={ticker} path="stocks"/>
          <Watchlist path="watchlist"/>
          <Economic path="calendar"/>
          <IpoCalender path="ipo"/>
        </Router>
    </GlobalProvider>
  );
}

export default App;
