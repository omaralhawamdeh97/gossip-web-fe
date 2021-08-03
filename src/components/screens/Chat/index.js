//Icons
import { FaAlignJustify } from "react-icons/fa";
import { MdAddCircleOutline, MdPersonAdd, MdGroupAdd } from "react-icons/md";

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
  FriendList,
  ListHeader,
} from "./styles";

//Components
import FriendCard from "./FriendCard";
import { addMessage } from "../../../store/actions/messageActions";
import ChatBody from "./ChatBody";
import Profile from "../Profile";

//React
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchFoundUser } from "../../../store/actions/authActions";
import ChatCard from "./ChatCard";
import AddFriend from "./AddFriend";
import NewGroup from "../../GroupCard/NewGroup";

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
  const [openModal, setOpenModal] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    dispatch(fetchFoundUser(user));
  }, []);
  const [profile, setProfile] = useState(false);

  //methods
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage({ ...body, chatId: ID }, update, setUpdate));
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
      <FriendCard friend={friend} user={user} />
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
        <ChatCard chat={chat} friends={friends} />
      </button>
    ));
  }
  if (!user) history.replace("/");
  const checkField = body.body === "" ? true : false;

  return (
    <MainDiv>
      <ChatDiv>
        <HeaderTwo line={profile}>
          <Header>
            <h2>Gossipies</h2>
            <FaAlignJustify size={25} onClick={handleProfile} />
          </Header>
          {profile ? (
            <>
              <ProfileTitle>Profile</ProfileTitle>
            </>
          ) : (
            <Input placeholder={"Search here..."} />
          )}
        </HeaderTwo>
        {profile ? (
          <>
            <Profile />
            <ListHeader>
              <h4>Friends</h4>
              <div>
                <MdPersonAdd
                  onClick={() => setOpenModal(true)}
                  size={30}
                  style={{ alignSelf: "flex-end", marginRight: "10px" }}
                />
                <MdGroupAdd
                  onClick={() => setOpenModalTwo(true)}
                  style={{ marginRight: "10px" }}
                  size={34}
                />
                {openModalTwo ? (
                  <NewGroup setOpenModalTwo={setOpenModalTwo} />
                ) : (
                  <></>
                )}
              </div>
            </ListHeader>
            <FriendList>{friends}</FriendList>
            {openModal ? (
              <AddFriend setOpenModal={setOpenModal} userId={user.id} />
            ) : (
              <></>
            )}
          </>
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
        {chat ? <ChatBody chatId={ID} update={update} /> : <></>}
        <Texting>
          <MdAddCircleOutline size={50} color="gray" />
          <InputText
            onChange={(v) => setBody({ ...body, body: v.target.value })}
            value={body.body}
          />
          <SendButton onClick={handleSubmit} disabled={checkField}>
            Send
          </SendButton>
        </Texting>
      </TopDivWrapper>
    </MainDiv>
  );
};

export default Chat;
