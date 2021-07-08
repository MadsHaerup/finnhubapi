import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { InputContainer, InputField, Button} from './Input.styles';



export default function Input({handleInput, ticker}) {

  const {addStockToWatchlist, watchlist} = useContext(GlobalContext);
  let onWatchlist = watchlist.find(obj => obj === ticker);
  const watchlistDisabled = onWatchlist ? true : false;

  return (
    <InputContainer>
      <InputField type="text" placeholder="Search for a stock" onKeyPress={(e) => e.key === "Enter" ? handleInput(e) : null}  />
      <Button 
        disabled={watchlistDisabled}
        onClick={()=>addStockToWatchlist(ticker)}
        Text="Add to Watchlist"
        />
    </InputContainer>
  )
}
