import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Btn from '../Components/Btn';

export default function Watchlist() {

  const {watchlist} = useContext(GlobalContext);

  return (
    <>
    {
      watchlist?.length > 0 ?
        <ul>
          {watchlist?.map((ticker)=>(
            <div key={ticker}>
            <li>{ticker}</li>
            <Btn ticker={ticker}/>
            </div>
          ))}
          
        </ul>
    : 
    <h2>No stocks added</h2>
  }
  </>
  )
}
