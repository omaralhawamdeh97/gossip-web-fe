//styles
import { InButton } from "./styles";

const SignupButton = ({ check }) => {
  return (
    <InButton color={`transparent`} disabled={check}>
      Sign Up
    </InButton>
  );
};

export default SignupButton;
