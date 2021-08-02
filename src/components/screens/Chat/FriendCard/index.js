import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addChat } from "../../../../store/actions/chatActions";
import { FriendCardStyle, FriendCardImage } from "./styles";
const FriendCard = ({ friend, userId }) => {
  const history = useHistory();
  const friendId = friend.id;
  const chat = {
    userId: userId,
    name: "",
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addChat(chat, userId, friendId, history));
  };
  return (
    <FriendCardStyle onClick={handleClick}>
      <FriendCardImage src={friend.image} alt={friend.username} />
      <h4 style={{ paddingLeft: 15 }}>{friend.username}</h4>
    </FriendCardStyle>
  );
};

export default FriendCard;
