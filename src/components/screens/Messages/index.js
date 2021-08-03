//styles
import { MessageCardStyle } from "./styles";

const MessageCard = ({ message, user, messageId, chat }) => {
  const sender = chat.users.find((user) => user.id === message.userId);

  return (
    <MessageCardStyle userId={user.id} messageId={messageId}>
      <h5 style={{ color: "#04009A" }}>{sender.username}</h5>
      <h4>{message.body}</h4>
    </MessageCardStyle>
  );
};

export default MessageCard;
