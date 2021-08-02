import { FriendCardImage, FriendCardStyle } from "./FriendCard/styles";

const ChatCard = ({ chat }) => {
  return (
    <FriendCardStyle>
      <FriendCardImage src={chat.image} alt={chat.name} />
      <h4 style={{ paddingLeft: 15 }}>hello</h4>
    </FriendCardStyle>
  );
};

export default ChatCard;
