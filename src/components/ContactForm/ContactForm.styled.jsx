import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  border: 2px solid #cbcbcb;
  width: 500px;
  padding: 15px;
  flex-direction: column;
  background-color: #fcfbfb;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 95%;
  margin-left: auto;
  height: 25px;
  padding: 5px;
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 20%;
  margin-left: 10px;
  cursor: pointer;
`;
