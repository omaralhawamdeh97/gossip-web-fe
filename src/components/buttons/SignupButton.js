//Styling
import { InButton } from "./styles";

const SignupButton = ({ check }) => {
  return (
    //Remove inline styling
    <InButton color={`transparent`} disabled={check}>
      Sign Up
    </InButton>
  );
};

export default SignupButton;
