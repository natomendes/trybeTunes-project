import styled from 'styled-components';

export default styled.textarea`
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
  background: #242424;
  color: rgb(19, 155, 123);
  flex: 1 50%;
  min-height: 150px;
  &::placeholder {
    color: #036B52;
    opacity: 0.7;
  }
  &:focus {
    outline: none !important;
    border: 2px solid #2FC18C;
    box-shadow: 0 0 12px #719ECE;
  }
`;
