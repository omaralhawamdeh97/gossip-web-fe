import styled from "styled-components";

export const MessageCardStyle = styled.div`
  background-color: lightgray;
  height: 65px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline: 7px;
  margin-top: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  background-color: ${(props) =>
    props.userId === props.messageId ? "#B1C6D2" : "#DAE5EC"}};
`;
