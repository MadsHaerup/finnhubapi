
import axios from 'axios';
import React, { useEffect, useState } from 'react'

var api = process.env.REACT_APP_API_KEY;

export default function IpoCalendar() {

  const [items, setItems] = useState([]);

  useEffect(() => {
  
    async function getIpos(){

      const response = await axios.get(`https://finnhub.io/api/v1/calendar/ipo?from=2021-01-01&to=2022-12-30&token=${api}`)

      console.log("ipo",response);
      setItems(response.data.ipoCalendar)
    }
    getIpos();

  }, [setItems,api])


  return (

<table style={{width:"100%"}}>
  <tr>
    <th>Company</th>
    <th>Date</th>
    <th>Status</th>
    <th>Shares</th>
    <th>Exchange</th>
    <th>Price</th>
  </tr>

  {items?.map((item)=>(
  <tr>
        <td>{item.name}</td>
        <td>{item.date}</td>
        <td>{item.status}</td>
        <td>{item.numberOfShares}</td>
        <td>{item.exchange}</td>
        <td>{item.price}</td>

  </tr>
      ))}
</table>
      
   
  )
}
