import { MessageCardStyle } from "./styles";

const MessageCard = ({ message, user, messageId }) => {
  return (
    <MessageCardStyle userId={user.id} messageId={messageId}>
      <h4>{message.body}</h4>
    </MessageCardStyle>
  );
};

export default MessageCard;
