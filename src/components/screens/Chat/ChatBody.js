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
  if (chats) {
    messages = chats.messages.map((message) => (
      <Line>
        <MessageCard message={message} />
      </Line>
    ));
  } else {
    loading = <h3>loading...</h3>;
  }
  useEffect(() => {
    dispatch(fetchChats(chatId));
  }, [chatId, messages]);
  const user = useSelector((state) => state.authReducer.user);
  var messages, loading;
  return (
    <ChatBodyDiv style={{ overflowY: "scroll", height: "80vh" }}>
      {chats ? <InnerDiv>{messages}</InnerDiv> : loading}
    </ChatBodyDiv>
  );
};

export default ChatBody;
