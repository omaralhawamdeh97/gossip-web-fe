import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addChat } from "../../../../store/actions/chatActions";
import { FriendCardStyle, FriendCardImage } from "./styles";
const FriendCard = ({ friend, user, disabled }) => {
  const history = useHistory();
  const friendId = friend.id;
  const chat = {
    userId: user.id,
    name: "",
  };
  const newArr = [
    { userId: user.id, chatId: "" },
    { userId: friendId, chatId: "" },
  ];

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addChat(chat, newArr, history));
  };
  return (
    <FriendCardStyle onClick={handleClick} disabled={disabled}>
      <FriendCardImage src={friend.image} alt={friend.username} />
      <h4 style={{ paddingLeft: 15 }}>{friend.username}</h4>
    </FriendCardStyle>
  );
};

export default FriendCard;
