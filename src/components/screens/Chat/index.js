import ChatCard from "../../ChatCard";

//Icons
import { FaAlignJustify, FaPlusCircle } from "react-icons/fa";

//Styling
import {
  ChatDiv,
  Input,
  InputText,
  MainDiv,
  SendButton,
  TopDiv,
} from "./styles";

const Chat = () => {
  return (
    <MainDiv>
      <ChatDiv>
        <h2
          style={{
            marginLeft: 7,
          }}
        >
          Gossipies <FaAlignJustify style={{ marginLeft: 150 }} />
        </h2>
        <Input placeholder={"Search here..."} />

        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </ChatDiv>
      <div
        style={{
          alignItems: "center",
          width: "100%",
        }}
      >
        <TopDiv>
          <h2>Dina isbaih</h2>
        </TopDiv>
        <InputText />
        <SendButton>Send</SendButton>
        <FaPlusCircle
          style={{
            position: "absolute",
            bottom: 15,
            left: "25.5%",
            color: "gray",
          }}
          size={40}
        />
      </div>
    </MainDiv>
  );
};

export default Chat;
