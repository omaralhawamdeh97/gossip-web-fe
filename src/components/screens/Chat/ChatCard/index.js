import { ChatCardStyle, ChatCardImage } from "./styles";
const ChatCard = () => {
  return (
    <ChatCardStyle>
      <ChatCardImage
        src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
        alt=""
      />
      <h4 style={{ paddingLeft: 15 }}>name</h4>
    </ChatCardStyle>
  );
};

export default ChatCard;
