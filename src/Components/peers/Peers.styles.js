import React from 'react'
import styled from 'styled-components';

export default function PeerContainer({items, setTicker}) {
  return (
    <Container>
      {items?.map((item)=>(
        <PeerElement onClick={e => setTicker(e.target.value)} value={item} >          
       {item}
        </PeerElement>
      ))}
    </Container>
  )
}

const Container = styled.div`
display: flex;
overflow-y: scroll;
`
const PeerElement = styled.button`
    padding: 0.5rem;
    border-radius: 15%;
    background-image: linear-gradient( 135deg,#FCCF31 10%,#F55555 100%);
    margin: 1rem;
    box-shadow: 0px 7px 8px 5px #f0f0f0;
    flex: 0 0 15%;
    text-align: center;
    font-weight: 600;
`