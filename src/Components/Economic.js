import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function Economic() {
  const api = process.env.REACT_APP_API_KEY;
  const [items, setItems] = useState([]);


  useEffect(() => {
    
    axios.get(`https://finnhub.io/api/v1/calendar/economic?token=${api}`, { json: true })
    .then((response) =>{
      console.log(response.data.economicCalendar)
      setItems(response.data.economicCalendar);
    })

  }, [setItems])



  return (
    <div>
      {items.map((item)=>(
        <Card 
        event = {item.event}
        country={item.country} 
        impact={item.impact}
        time = {item.time}
        estimate = {item.estimate}
        actual = {item.actual}
        />
      ))}
      
    </div>
  )
}
