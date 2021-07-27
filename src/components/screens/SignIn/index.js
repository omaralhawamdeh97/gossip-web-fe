//react
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
//styles
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { SignInScreen, Title, Form, Label } from "./styles";
//components
import SigninButton from "../../buttons/SigninButton";
//redux
import { useDispatch } from "react-redux";
import { signin } from "../../../store/actions/authActions";

const SignIn = () => {
  //hooks
  const history = useHistory();
  const dispatch = useDispatch();
  //states
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  const [check, setCheck] = useState(true);
  const [mess, setMess] = useState("none");

  useEffect(() => {
    if (user.username !== "" && user.password !== "") {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [user]);

  //methods
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history, setMess));
  };

  return (
    <SignInScreen>
      <Title>Sign In </Title>
      <Form onSubmit={handleSubmit}>
        <div>
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
        <p style={{ display: mess, color: "red" }}>
          User name and password does not match
        </p>
        <SigninButton type="submit" check={check} />
        <Grid item>
          <Link to="/signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Form>
    </SignInScreen>
  );
};

export default SignIn;
