import { useState } from "react";
import IpoCalender from "./Pages/IpoCalendar";
// import Economic from "./Components/Economic";
import Sentiment from "./Components/Sentiment";
import StockChart from "./Components/StockChart";
import { Router } from "@reach/router";
import Navbar from "./Components/Navbar";
import CompanyProfile from './Components/CompanyProfile';
import Insider from './Components/Insider';
require('dotenv').config();

function App() {
  const [ticker, setTicker] = useState(" ");

  const handleInput = (event) => {
    setTicker(event.target.value);
  };

  return (
    <div className="App">
      <Navbar/>
      <input type="text"  onKeyPress={(e) => e.key === "Enter" ? handleInput(e) : null}  />
      {/* <Economic/> */}
      <Router>
      {/* <CompanyProfile path="/" ticker={ticker}/> */}
      <Insider path="/" ticker={ticker}/>
      {/* <StockChart path="/" ticker={ticker}/>
      <Sentiment path="/" ticker={ticker}/> */}
      <IpoCalender path="ipocalendar"/>
      </Router>
    </div>
  );
}

export default App;
