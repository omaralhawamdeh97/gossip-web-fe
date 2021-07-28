import { useSelector } from "react-redux";
import Routes from "./components/Routes";

function App() {
  const loading = useSelector((state) => state.messageReducer.loading);

  return <>{loading ? <h3>loading..</h3> : <Routes />}</>;
}

export default App;
