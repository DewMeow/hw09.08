import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/protected"
            component={ProtectedComponent}
          />
          <PrivateRoute exact path="/logout" component={Logout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
