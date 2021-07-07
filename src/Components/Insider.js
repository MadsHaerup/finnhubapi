import React, { useEffect, useState } from 'react';
import axios from 'axios';

var api = process.env.REACT_APP_API_KEY;

export default function Insider({ticker}) {

  const [items, setItems] = useState([]);

  useEffect(() => {
  
    async function getInsider(){

      const response = await axios.get(`https://finnhub.io/api/v1/stock/insider-transactions?symbol=${ticker === " " ? "fb" : ticker }&token=${api}`)

      console.log("Insider",response);
      setItems(response.data.data)
    }
    getInsider();

  }, [setItems, ticker])
 

  return (
    <>
    {
      window.innerWidth < '600' ?
      <details>
        {items?.map((item)=>(
          <ul>
              <li>{item.name}</li>
              <li>{item.share}</li>
              <li>{item.change}</li>
              <li>{item.filingDate}</li>
              <li>{item.transactionDate}</li>
              <li>{item.transactionPrice}</li>
          </ul>
      ))}
      </details>

      :
    
  <table style={{width:"100%"}}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Shares</th>
        <th>Change</th>
        <th>Filling date</th>
        <th>Transaction date</th>
        <th>Transaction Price</th>
      </tr>
    </thead>
    {items?.map((item)=>(
      <tbody>
        <tr>
          <td>{item.name}</td>
          <td>{item.share}</td>
          <td>{item.change}</td>
          <td>{item.filingDate}</td>
          <td>{item.transactionDate}</td>
          <td>{item.transactionPrice}</td>
        </tr>
      </tbody>
    ))}
  </table>
  }
  </>
  )
}
