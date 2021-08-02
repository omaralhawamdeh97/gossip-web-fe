//React
import { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Styling
import { ChatBodyDiv, InnerDiv, Line } from "./styles";

//Components
import MessageCard from "../Messages";

//Actions
import { fetchChats } from "../../../store/actions/chatActions";

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
    loading = <h3>loading...</h3>; //Create a loading component
  }

  useEffect(() => {
    dispatch(fetchChats(chatId));
  }, [chatId, messages]);

  const user = useSelector((state) => state.authReducer.user); //Unused

  var messages, loading;

  return (
    <ChatBodyDiv style={{ overflowY: "scroll", height: "80vh" }}>
      {chats ? <InnerDiv>{messages}</InnerDiv> : loading}
    </ChatBodyDiv>
  );
};

export default ChatBody;
