import ChatCard from "../../ChatCard";
import { ChatDiv, MainDiv } from "./styles";
import { FaEllipsisH, FaPlusCircle, FaRegSun } from "react-icons/fa";

const Chat = () => {
  return (
    <MainDiv>
      <ChatDiv>
        <h2
          style={{
            marginLeft: 7,
          }}
        >
          Gossipies <FaEllipsisH style={{ marginLeft: 150 }} />
        </h2>
        <input
          style={{
            width: 330,
            alignSelf: "center",
            borderRadius: 10,
            marginLeft: 7,
            marginTop: 10,
            borderColor: "white",
          }}
          placeholder={"Search here..."}
        />
        <div />
        <ChatCard />
      </ChatDiv>
      <div
        style={{
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: 30,
            paddingTop: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Dina isbaih</h2>
          <FaRegSun size={30} />
        </div>
        <input
          style={{
            width: "70%",
            height: 40,
            position: "absolute",
            bottom: 15,
            right: 10,
            borderRadius: 15,
          }}
        />
        <button
          style={{
            width: 60,
            height: 40,
            position: "absolute",
            bottom: 15,
            right: 10,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          Send
        </button>
        <FaPlusCircle
          style={{
            position: "absolute",
            bottom: 15,
            left: "25.5%",
          }}
          size={40}
        />
      </div>
    </MainDiv>
  );
};

export default Chat;
