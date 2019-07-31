import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from 'store';
import {
  App,
  Homepage,
  CarsList,
  DriversList,
  CarDetails,
  DriverDetails,
  DriverCreate,
} from 'domains';
import 'i18n';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/cars/:id" component={CarDetails} />
          <Route path="/cars" component={CarsList} />
          <Route path="/drivers/create" component={DriverCreate} />
          <Route path="/drivers/:id" component={DriverDetails} />
          <Route path="/drivers" component={DriversList} />
          <Route path="/" component={Homepage} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// todo: simplify api Client
// todo: add global error handling (snackbar?) - check React Error Boundaries
