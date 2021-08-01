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
//Components
import FriendCard from "./FriendCard";
import MessageCard from "../Messages";
import { addMessage } from "../../../store/actions/messageActions";
import ChatBody from "./ChatBody";
import Profile from "../Profile";
//React
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchFoundUser } from "../../../store/actions/authActions";

const Chat = () => {
  //Hooks
  const history = useHistory();
  const dispatch = useDispatch();
  //Selector
  const user = useSelector((state) => state.authReducer.user);
  //useState
  var hello;
  useEffect(() => {
    dispatch(fetchFoundUser(user));
  }, [hello]);
  const [profile, setProfile] = useState(false);
  const [body, setBody] = useState({ body: "" });
  //methods
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
  var friends = [];
  if (user.from || user.to) {
    const fromList = user.from.map((friend) => friend);
    const toList = user.to.map((friend) => friend);
    friends = [...fromList, ...toList].map((friend) => (
      <FriendCard friend={friend} />
    ));
  }
  if (!user) history.replace("/");
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
        {profile ? <Profile /> : <>{friends}</>}
      </ChatDiv>
      <TopDivWrapper>
        <TopDiv>
          <h2>{user.username}</h2>
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
