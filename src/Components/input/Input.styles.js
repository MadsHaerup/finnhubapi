import React from 'react';
import styled from 'styled-components';

export const InputContainer = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 2rem;
`;

export const InputField = ({type, placeholder, onKeyPress}) => {
  return (
   <SearchField type={type} placeholder={placeholder} onKeyPress={onKeyPress} />
  )
}

const SearchField = styled.input`
  border-radius: 5px;
  padding: 0.3rem 0.6rem;
  border: none;
  box-shadow: 0px 4px 3px -1px #8b8b8b;
  outline: none;
`;


export const Button = ({disabled, onClick, Text}) => {
  return (
    <AddButton disabled={disabled} onClick={onClick}>
      {Text}
    </AddButton>
  )
}

const AddButton = styled.button`
  background-color: #ffbf69;
  border:none;
  font-weight: 600;
`;