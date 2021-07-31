//styles
import { Title, HomeDiv, ButtonsDiv } from "./styles";
//buttons
import SigninButton from "../../buttons/SigninButton";
import SignupButton from "../../buttons/SignupButton";
//react
import { Link } from "react-router-dom";
//icons
import { MdChatBubbleOutline } from "react-icons/md";

const Home = () => {
  return (
    <HomeDiv>
      <Title>
        Let's Gossip <MdChatBubbleOutline style={{ marginBottom: 40 }} />
      </Title>

      <ButtonsDiv>
        <Link to="/signin">
          <SigninButton />
        </Link>
        <Link to="/signup">
          <SignupButton />
        </Link>
      </ButtonsDiv>
    </HomeDiv>
  );
};

export default Home;
