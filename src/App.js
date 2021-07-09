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

  return (
    <GlobalProvider>
      <Navbar/>
      <Router>
        <Home path="/"/>
        <Stock path="stocks"/>
        <Stock path="stocks/:name"/>
        <Watchlist path="watchlist"/>
        <Economic path="calendar"/>
        <IpoCalender path="ipo"/>
      </Router>
    </GlobalProvider>
  );
}

export default App;
