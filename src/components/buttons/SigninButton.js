//styles
import { InButton } from "./styles";

const SigninButton = ({ check }) => {
  return (
    <InButton color={`#5B5B5B`} disabled={check}>
      Sign In
    </InButton>
  );
};

export default SigninButton;
