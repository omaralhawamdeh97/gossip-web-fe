//react
import { Route, Switch } from "react-router";
//components
import Home from "./screens/Home/index";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
};
export default Routes;
