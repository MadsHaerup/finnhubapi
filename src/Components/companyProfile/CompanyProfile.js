import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileContainer from './CompanyProfile.styles';
import Title from '../title/Title';
var api = process.env.REACT_APP_API_KEY;

export default function CompanyProfile({ticker}) {

  const [item, setItems] = useState([]);

  useEffect(() => {
  
    async function getProfile(){

      const response = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${ticker === " " ? "fb" : ticker }&token=${api}`)

      console.log("profile",response);
      setItems(response.data)
    }
    getProfile();

  }, [setItems, ticker])

  return (
  <>
  <Title title="Company Profile"/>
  <ProfileContainer>
    <img src={item.logo} alt="logo" />
    <p>{item.name} | {item.ticker} | {item.country}</p>
    <a href={item.weburl} target="_blank" rel="noreferrer" >{item.weburl}</a>
    <p>Ipo date: {item.ipo} </p>
    <p>Exchange: {item.exchange} </p>
    <p>Market Cap: {item.marketCapitalization}</p>
    <p>Industry: {item.finnhubIndustry}</p>
  </ProfileContainer>
  </>
  )
}
