import { ChatCardStyle, ChatCardImage } from "./styles";
const ChatCard = () => {
  return (
    <ChatCardStyle>
      <ChatCardImage
        src="https://ih1.redbubble.net/image.528151419.4599/flat,750x,075,f-pad,750x1000,f8f8f8.u6.jpg"
        alt=""
      />
      <h4 style={{ paddingLeft: 15 }}>name</h4>
    </ChatCardStyle>
  );
};

export default ChatCard;
