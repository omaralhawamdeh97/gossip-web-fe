import ChatCard from "../../ChatCard";

//Icons
import { FaAlignJustify, FaPlusCircle } from "react-icons/fa";

//Styling
import {
  ChatDiv,
  Header,
  HeaderTwo,
  Input,
  InputText,
  MainDiv,
  SendButton,
  TopDiv,
} from "./styles";
import MessageCard from "../Messages";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../store/actions/messageActions";
import ChatBody from "./ChatBody";

const Chat = () => {
  const [body, setBody] = useState({ body: "" });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(body));
  };

  return (
    <MainDiv>
      <ChatDiv>
        <HeaderTwo>
          <Header>
            <h2>Gossipies</h2>
            <FaAlignJustify size={25} />
          </Header>
          <Input placeholder={"Search here..."} />
        </HeaderTwo>
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
        <ChatBody chatId />
        <div>
          <InputText
            onChange={(v) => setBody({ ...body, body: v.target.value })}
          />
          <SendButton onClick={handleSubmit}>Send</SendButton>
          <FaPlusCircle
            style={{
              position: "absolute",
              bottom: 15,
              // left: "29.5%",
              color: "gray",
            }}
            size={40}
          />
        </div>
      </div>
    </MainDiv>
  );
};

export default Chat;
