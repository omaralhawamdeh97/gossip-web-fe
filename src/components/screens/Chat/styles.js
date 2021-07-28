import styled from "styled-components";
export const MainDiv = styled.div`
  display: flex;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 10px;
`;
export const HeaderTwo = styled.div`
  border-bottom-style: solid;
  border-bottom-color: black;
  padding-bottom: 10px;
`;

export const ChatDiv = styled.div`
  padding-top: 10px;
  width: 350px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 300px;
  margin-inline: 10px;
  align-self: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 10px;
  border-color: white;
`;

export const TopDiv = styled.div`
  padding: 30px;
  border-bottom-style: solid;
`;

export const InputText = styled.input`
  width: 60%;
  height: 40px;
  position: absolute;
  bottom: 15px;
  right: 150px;
  border-radius: 15px;
`;

export const SendButton = styled.button`
  width: 60px;
  height: 40px;
  position: absolute;
  bottom: 15px;
  right: 100px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;
