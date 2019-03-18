import React from "react";

import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';

import Home from "./page/Home.jsx";
import Form from "./page/Form.jsx";

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={Form} />
      <Route path="/edit/:id" component={Form} />
    </Switch>
  </ConnectedRouter>
)

export default App;