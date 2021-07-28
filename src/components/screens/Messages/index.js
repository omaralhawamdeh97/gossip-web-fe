import { MessageCardStyle } from "./styles";

const MessageCard = ({ message }) => {
  return (
    <MessageCardStyle>
      <h4>{message.body}</h4>
    </MessageCardStyle>
  );
};

export default MessageCard;
