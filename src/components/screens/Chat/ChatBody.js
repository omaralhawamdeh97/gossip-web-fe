import { useSelector } from "react-redux";
import MessageCard from "../Messages";

const ChatBody = () => {
  const messages = useSelector((state) => state.messageReducer.messages);
  return (
    <div>
      {messages.map((message) => (
        <MessageCard message={message} />
      ))}
    </div>
  );
};

export default ChatBody;
