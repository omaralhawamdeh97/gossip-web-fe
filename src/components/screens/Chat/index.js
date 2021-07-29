import ChatCard from "./ChatCard";

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
  TopDivWrapper,
  ProfileTitle,
  Texting,
} from "./styles";
import MessageCard from "../Messages";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../store/actions/messageActions";
import ChatBody from "./ChatBody";
import Profile from "../Profile";

const Chat = () => {
  const [profile, setProfile] = useState(false);
  const [body, setBody] = useState({ body: "" });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(body));
    setBody({ ...body, body: "" });
  };
  const handleProfile = () => {
    if (profile === true) {
      setProfile(false);
    } else {
      setProfile(true);
    }
  };
  return (
    <MainDiv>
      <ChatDiv>
        <HeaderTwo line={profile}>
          <Header>
            <h2>Gossipies</h2>
            <FaAlignJustify size={25} onClick={handleProfile} />
          </Header>
          {profile ? (
            <ProfileTitle>Profile</ProfileTitle>
          ) : (
            <Input placeholder={"Search here..."} />
          )}
        </HeaderTwo>
        {profile ? (
          <Profile />
        ) : (
          <>
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </>
        )}
      </ChatDiv>
      <TopDivWrapper>
        <TopDiv>
          <h2>Dina isbaih</h2>
        </TopDiv>
        <ChatBody chatId />
        <Texting>
          <InputText
            onChange={(v) => setBody({ ...body, body: v.target.value })}
            value={body.body}
          />
          <SendButton onClick={handleSubmit}>Send</SendButton>
          <FaPlusCircle
            style={{
              position: "absolute",
              bottom: 15,
              color: "gray",
            }}
            size={40}
          />
        </Texting>
      </TopDivWrapper>
    </MainDiv>
  );
};

export default Chat;
