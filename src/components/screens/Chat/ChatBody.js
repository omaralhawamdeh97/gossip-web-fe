//Redux
import { useSelector, useDispatch } from "react-redux";
//React
import { useEffect } from "react";
//actions
import { fetchChats } from "../../../store/actions/chatActions";
//components
import MessageCard from "../Messages";
//styles
import { ChatBodyDiv, InnerDiv, Line } from "./styles";

const ChatBody = ({ chatId }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chatReducer.chats);
  const user = useSelector((state) => state.authReducer.user);
  if (chats) {
    messages = chats.messages.map((message) => (
      <Line userId={user.id} messageId={message.userId}>
        <MessageCard message={message} user={user} messageId={message.userId} />
      </Line>
    ));
  } else {
    loading = <h3>loading...</h3>;
  }
  useEffect(() => {
    dispatch(fetchChats(chatId));
  }, [chatId, messages]);
  var messages, loading;
  return <ChatBodyDiv>{chats ? <>{messages}</> : loading}</ChatBodyDiv>;
};

export default ChatBody;
