//Redux
import { useSelector } from "react-redux";
//styles
import { FriendCardImage, FriendCardStyle } from "./FriendCard/styles";
import { GroupCardStyles, Members } from "./styles";

const ChatCard = ({ chat }) => {
  const user = useSelector((state) => state.authReducer.user);

  const foundFriend =
    user.from.find((user) => user.chats.find((x) => x.id === chat.id)) ||
    user.to.find((user) => user.chats.find((x) => x.id === chat.id));

  const pairs = chat.users.length <= 2 ? true : false;

  return (
    <FriendCardStyle>
      {pairs ? (
        <>
          <FriendCardImage
            src={foundFriend?.image}
            alt={foundFriend?.username}
          />
          <h4 style={{ paddingLeft: 15 }}>{foundFriend?.username}</h4>
        </>
      ) : (
        <>
          <FriendCardImage
            src="https://resources.arcamax.com/newspics/186/18665/1866578.jpg"
            alt={foundFriend?.username}
          />
          <GroupCardStyles>
            <h4 style={{ paddingLeft: 15 }}>{chat?.name}</h4>
            <Members>{chat.users.map((user) => `${user.username} ,`)}</Members>
          </GroupCardStyles>
        </>
      )}
    </FriendCardStyle>
  );
};

export default ChatCard;
