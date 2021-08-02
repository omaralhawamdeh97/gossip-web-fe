//React
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

//Redux
import { useDispatch, useSelector } from "react-redux";

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
  ChatsTitle,
} from "./styles";
import { FaAlignJustify, FaPlusCircle } from "react-icons/fa";

//Components
import FriendCard from "./FriendCard";
import MessageCard from "../Messages"; //Remove unused import
import ChatBody from "./ChatBody";
import Profile from "../Profile";
import ChatCard from "./ChatCard";

//Actions
import { addMessage } from "../../../store/actions/messageActions";
import { fetchFoundUser } from "../../../store/actions/authActions";

const Chat = () => {
  //Hooks
  const history = useHistory();
  const dispatch = useDispatch();

  //Selector
  const user = useSelector((state) => state.authReducer.user);

  //useState
  const [chat, setChat] = useState();
  const [ID, setID] = useState("");
  const [body, setBody] = useState({ body: "", chatId: ID });

  var hello;
  useEffect(() => {
    dispatch(fetchFoundUser(user));
  }, [hello]);

  const [profile, setProfile] = useState(false);

  //Methods
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage({ ...body, chatId: ID }));
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

  var chatList;
  if (user.chats) {
    chatList = user.chats.map((chat) => (
      <button
        onClick={() => {
          setChat(chat);
          setID(chat.id);
        }}
      >
        <ChatCard chat={chat} />
      </button>
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
        {profile ? (
          <Profile />
        ) : (
          <>
            <ChatsTitle>Chats..</ChatsTitle>
            {chatList?.length !== 0 ? chatList : <h6>no chats</h6>}
          </>
        )}
      </ChatDiv>
      <TopDivWrapper>
        <TopDiv>
          <h2>{user.username}</h2>
        </TopDiv>
        {chat ? <ChatBody chatId={ID} /> : <></>}
        <Texting>
          <InputText
            onChange={(v) => setBody({ ...body, body: v.target.value })}
            value={body.body}
          />
          <SendButton onClick={handleSubmit}>Send</SendButton>
          {/*Remove inline styling */}
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
