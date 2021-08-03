//styles
import { FriendCardStyle, FriendCardImage } from "./styles";

const FriendCard = ({ friend, onClick }) => {
  return (
    <FriendCardStyle onClick={onClick}>
      <FriendCardImage src={friend.image} alt={friend.username} />
      <h4 style={{ paddingLeft: 15 }}>{friend.username}</h4>
    </FriendCardStyle>
  );
};

export default FriendCard;
