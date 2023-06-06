import styled from 'styled-components';

export const Ul = styled.ul`
  width: 350px;
  padding-left: 10px;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  background-color: #fcfbfb;
  border-radius: 5px;
  padding: 10px;
  border: 2px solid #cbcbcb;
  margin-bottom: 5px;
  :hover {
    background-color: #d6d4d4;
  }
  > p {
    margin: 0;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 20px;
  cursor: pointer;
`;
