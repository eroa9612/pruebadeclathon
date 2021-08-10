import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/paginas/Login";
import RegisterUser from "./components/paginas/RegisterUser";
import Productos from "./components/paginas/Productos";

import RutaSegura from "./components/navegacion/RutaSegura";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={RegisterUser} />
          <Route exact path="/productos" component={Productos} />
          <RutaSegura exact path="/" component={RegisterUser} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
