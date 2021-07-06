import React from 'react'
import styled from 'styled-components';
export default function Cardview(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
display: grid;
padding: 1rem;
border-radius: 10px;
background-color: #c5d5ee;
/* width: 100vw; */
flex: 0 0 70%;
margin: 1rem;
height: 300px;
overflow-y: scroll;
`