import styled from 'styled-components';

export default styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 10px;
  background: #036B52;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: 'Verdana', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  transition: all ease-in-out 400ms;
  &:hover {
    background: #2FC18C;
    box-shadow: 0 0 12px #719ECE;
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  &:disabled:hover {
    background: #036B52;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  }

`;
