import React, { useEffect, useState } from 'react';
import axios from 'axios';
var api = process.env.REACT_APP_API_KEY;

export default function MarketNews() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    async function getMarketNews(){
      const response = await axios.get(`https://finnhub.io/api/v1/news?category=general&token=${api}`)
      console.log("market news",response);
      setItems(response.data)
    }
    getMarketNews();

  }, [setFilteredItems])
 
  const handleChange = (e) => {
    const result = items.filter(item => item.category === e.target.value)
    console.log(result);
    setFilteredItems(result)
  }

  return (
    <>
    <select name="news" id="news" onChange={handleChange}>
      <option value="">All</option>
      <option value="top news">Top News</option>
      <option value="business">Business</option>
    </select>
    {    
    // items ? 
    // items.map((item)=>(
    //   <div key={item.id}>
    //     <h2>{item.headline} | {item.datetime} </h2>
    //     <span>{item.category} </span>
    //     <p>{item.summary} </p>
    //   </div>
    //   ))
    //   :
    filteredItems?.map((filteredItem)=>(
    <div key={filteredItem.id}>
      <h2>{filteredItem.headline} | {filteredItem.datetime} </h2>
      <span>{filteredItem.category} </span>
      <p>{filteredItem.summary} </p>
    </div>
    ))
    
   
    }
    </>
  )
}
