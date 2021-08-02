//React
import { Link } from "react-router-dom";

//Styling
import { Title, HomeDiv, ButtonsDiv } from "./styles";
import SigninButton from "../../buttons/SigninButton";
import SignupButton from "../../buttons/SignupButton";
import { MdChatBubbleOutline } from "react-icons/md";

const Home = () => {
  return (
    <HomeDiv>
      {/*Remove inline styling */}
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
