//react
import { useState } from "react";
import { useHistory } from "react-router-dom";

//styles
import { SignUpScreen, Title, Form, Label } from "./styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
//components
import SignupButton from "../../Buttons/SignupButton";
//redux
import { useDispatch } from "react-redux";
import { signup } from "../../../store/actions/authActions";

const SignUp = () => {
  //hooks
  const history = useHistory();
  const dispatch = useDispatch();

  //states
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  //methods
  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user));
    history.push("/");
  };
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <SignUpScreen>
      <Title>Sign Up </Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <div>
            <Label>Fullname</Label>
            <TextField
              fullWidth
              onChange={handleChange}
              name="fullname"
              variant="outlined"
              type="text"
            />
          </div>
          <div>
            <Label>Username</Label>
            <TextField
              fullWidth
              onChange={handleChange}
              name="username"
              variant="outlined"
              type="text"
            />
          </div>
          <Label>Password</Label>
          <TextField
            style={{ width: 400 }}
            onChange={handleChange}
            name="password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <SignupButton type="submit" />
      </Form>
    </SignUpScreen>
  );
};

export default SignUp;
