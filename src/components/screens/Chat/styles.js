import styled from "styled-components";
export const MainDiv = styled.div`
  background-color: white;
  height: 100vh;

  display: flex;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 10px;
`;
export const HeaderTwo = styled.div`
  border-bottom-style: ${(props) => (props.line ? "none" : "solid")};
  border-bottom-color: gray;
  padding-bottom: 10px;
  border-width: 0.01px;
`;

export const ChatDiv = styled.div`
  padding-top: 10px;
  width: 350px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: #f5f7f8;

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
  border-bottom-color: gray;
  border-width: 0.01px;
`;

export const InputText = styled.input`
  background-color: white;

  width: 80%;
  height: 50px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  margin-left: 10px;
  border-color: gray;
  border-width: 0.1px;
`;

export const SendButton = styled.button`
  width: 60px;
  height: 50px;
  background-color: #be8a5a;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  border-color: #be8a5a;
`;
export const TopDivWrapper = styled.div`
  align-items: "center";
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;
export const ProfileTitle = styled.h3`
  font-style: italic;
  margin-top: 25px;
  text-align: center;
  font-size: 25;
`;
export const Texting = styled.div`
  justify-content: center;
  background-color: white;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const ChatsTitle = styled.h3`
  font-style: italic;
  margin-top: 25px;

  font-size: 25;
`;

export const ChatBodyDiv = styled.div`
  align-items: flex-start;
  overflow-y: scroll;
  height: 80vh;
`;

export const Line = styled.text`
  display: flex;
  justify-content: ${(props) =>
    props.userId === props.messageId ? "flex-end" : "flex-start"};
  width: 100%;
`;

export const FriendList = styled.div`
  align-items: flex-start;
  overflow-y: scroll;
  height: 50vh;
`;

export const ListHeader = styled.div`
  padding-top: 10px;
  border-top-width: 0.5px;
  border-top-style: solid;
  margin-top: 10px;
  display: flex;
  margin-inline: 7px;
  justify-content: space-between;
  align-items: center;
`;
