import React from 'react';
import styled from 'styled-components';

export default function ProfileContainer({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.section`
box-shadow: 0px 7px 8px 5px #f0f0f0;
  margin:1rem;
  padding:1rem;
  display: grid;
  border-radius: 10px;
  font-weight:600;
  color:#202020;
`;