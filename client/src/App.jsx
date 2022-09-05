import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ErrorNotFound from "./components/ErrorNotFound";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            {/* <Route component={ErrorNotFound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
