import styled from 'styled-components';

export default styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 10px;
  font-family: 'Verdana', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  border-radius: 4px;
  border: 2px solid #036B52;
  transition: all ease-in-out 300ms;
  color: #036B52;
  &:focus {
    outline: none !important;
    border: 2px solid #2FC18C;
    box-shadow: 0 0 12px #719ECE;
  }
`;
