//Redux
import { useSelector, useDispatch } from "react-redux";
//React
import { useEffect } from "react";
//actions
import { fetchChats } from "../../../store/actions/chatActions";
import MessageCard from "../Messages";

const ChatBody = ({ chatId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChats());
  }, []);
  const user = useSelector((state) => state.authReducer.user);
  const chats = useSelector((state) => state.chatReducer.chats);
  console.log(chats);
  // const chat = chats.find(
  //   (chat) => chat.id === user.chats.find((x) => chat.id === x.id)
  // );

  // const foundChat = user.chats.conversations.find((chat) => chatId === chat.id);
  return <div></div>;
};

export default ChatBody;
