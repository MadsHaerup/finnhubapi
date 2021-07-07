import React from 'react'
import styled from 'styled-components';

export default function PeerContainer({items}) {
  return (
    <Container>
      {items?.map((item)=>(
        <PeerElement>
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
const PeerElement = styled.div`
    padding: 1rem;
    border-radius: 15%;
    background-color: #7dffa3;
    margin: 1rem;
    box-shadow: 0px 7px 8px 5px #f0f0f0;
    flex: 0 0 15%;
    text-align: center;
    font-weight: 600;
`