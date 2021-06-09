import React from 'react'

export default function Card({country, event, impact,actual, time, estimate}) {
  return (
    <div>
      
      <h3>{event}</h3>
      <span>{country} </span>
      <span>{time} </span>
      <ul>
        { impact === null ? null : <li>Impact: {impact}</li>}
        { estimate === null ? null : <li>Estimate: {estimate}</li>}
        { actual === null ? null : <li>Actual: {actual}</li>}
      </ul>
      
    </div>
  )
}
