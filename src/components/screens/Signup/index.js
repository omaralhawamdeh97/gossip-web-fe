//React
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";

//Styling
import { SignUpScreen, Title, Form, Label } from "./styles";
import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

//Components
import SignupButton from "../../buttons/SignupButton";

//Actions
import { signup } from "../../../store/actions/authActions";

const SignUp = () => {
  //Hooks
  const history = useHistory();
  const dispatch = useDispatch();

  //States
  const [mess, setMess] = useState("none");
  const [check, setCheck] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (user.username !== "" && user.password !== "") {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [user]);

  //Methods
  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history, setMess));
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <SignUpScreen>
      <Title>Sign Up </Title>
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
          <Label>Password</Label>
          <TextField
            style={{ width: 400 }} //Remove inline styling
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
        {/**Remove inline styling */}
        <p style={{ display: mess, color: "red" }}>User name already exists</p>
        <SignupButton type="submit" check={check} />
        {/**Remove inline styling */}
        <Grid item style={{ marginBottom: 10 }}>
          <Link to="/signin" variant="body2">
            {"Already have an account? Sign In"}
          </Link>
        </Grid>
      </Form>
    </SignUpScreen>
  );
};

export default SignUp;
