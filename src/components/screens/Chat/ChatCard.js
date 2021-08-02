import { useSelector } from "react-redux";
import { FriendCardImage, FriendCardStyle } from "./FriendCard/styles";

const ChatCard = ({ chat, friends }) => {
  const user = useSelector((state) => state.authReducer.user);
  const foundFriend =
    user.from.find((user) => user.chats.find((x) => x.id === chat.id)) ||
    user.to.find((user) => user.chats.find((x) => x.id === chat.id));

  return (
    <FriendCardStyle>
      <FriendCardImage src={foundFriend?.image} alt={foundFriend?.username} />
      <h4 style={{ paddingLeft: 15 }}>{foundFriend?.username}</h4>
    </FriendCardStyle>
  );
};

export default ChatCard;
