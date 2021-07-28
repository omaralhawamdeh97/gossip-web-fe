import styled from "styled-components";
export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ChatDiv = styled.div`
  padding-top: 30px;
  width: 350px;
  height: 655px;
  background-color: whitesmoke;
`;

export const Input = styled.input`
  width: 300px;
  align-self: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 7px;
  margin-top: 10px;
  border-color: white;
`;

export const TopDiv = styled.div`
  padding: 30px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
