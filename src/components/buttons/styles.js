import styled from "styled-components";

export const InButton = styled.button`
  font-family: Roboto;
  font-size: 20px;
  width: 150px;
  height: 50px;
  border-radius: 8px;
  margin: 20px;
  background-color: ${(props) => props.color};
`;
