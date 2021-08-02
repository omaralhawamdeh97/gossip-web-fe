//Styling
import { FriendCardStyle, FriendCardImage } from "./styles";

const FriendCard = ({ friend }) => {
  return (
    <FriendCardStyle>
      <FriendCardImage src={friend.image} alt={friend.username} />
      {/*Remove inline styling */}
      <h4 style={{ paddingLeft: 15 }}>{friend.username}</h4>
    </FriendCardStyle>
  );
};

export default FriendCard;
