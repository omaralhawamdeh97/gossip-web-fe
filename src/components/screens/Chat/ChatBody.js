//Redux
import { useSelector, useDispatch } from "react-redux";

//React
import { useEffect } from "react";

//actions
import {
  fetchChats,
  updateChatImage,
} from "../../../store/actions/chatActions";

//components
import MessageCard from "../Messages";

//styles
import { ChatBodyDiv, Line } from "./styles";
import { Button, TextField } from "@material-ui/core";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";

const ChatBody = ({ chatId, update, setProfile }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chatReducer.chats);
  const user = useSelector((state) => state.authReducer.user);

  const handleImage = (e) => {
    dispatch(updateChatImage({ image: e.target.files[0] }, chatId));
    setProfile(true);
  };

  if (chats) {
    messages = chats.messages.map((message) => (
      <Line userId={user.id} messageId={message.userId}>
        <MessageCard
          message={message}
          user={user}
          messageId={message.userId}
          chat={chats}
        />
      </Line>
    ));
  } else {
    loading = <h3>loading...</h3>;
  }

  useEffect(() => {
    dispatch(fetchChats(chatId));
  }, [chatId, update]);
  var messages, loading;

  return (
    <ChatBodyDiv>
      {chats ? (
        <>
          {chats?.users.length > 2 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <Button component="label">
                <TextField
                  onChange={handleImage}
                  name="image"
                  type="file"
                  hidden
                />
                {`Update group image...`}
                <ImageSearchIcon />
              </Button>
            </div>
          ) : (
            <></>
          )}

          {messages}
        </>
      ) : (
        loading
      )}
    </ChatBodyDiv>
  );
};

export default ChatBody;
