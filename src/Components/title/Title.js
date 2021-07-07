import React from 'react';
import styled from 'styled-components';

export default function Title({title}) {
  return (
    <Heading>
      {title}
    </Heading>
  )
}

const Heading = styled.h2`
  margin: 1rem;
`;