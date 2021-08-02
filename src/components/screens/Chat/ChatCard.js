//Styling
import { FriendCardImage, FriendCardStyle } from "./FriendCard/styles";

const ChatCard = ({ chat }) => {
  return (
    <FriendCardStyle>
      <FriendCardImage src={chat.image} alt={chat.name} />
      {/*Remove inline styling */}
      <h4 style={{ paddingLeft: 15 }}>hello</h4>
    </FriendCardStyle>
  );
};

export default ChatCard;
