import { ChatCardStyle } from "./styles";
const ChatCard = () => {
  return (
    <ChatCardStyle>
      <img
        style={{
          height: 60,
          width: 60,
          borderRadius: 500,
        }}
        src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
      />
      <h4 style={{ paddingLeft: 15 }}>name</h4>
    </ChatCardStyle>
  );
};

export default ChatCard;
