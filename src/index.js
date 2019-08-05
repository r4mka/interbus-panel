import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from 'store';
import {
  App,
  Homepage,
  CarCreate,
  CarDetails,
  CarsList,
  DriverCreate,
  DriverDetails,
  DriversList,
  OrderCreate,
  OrderDetails,
  OrdersList,
} from 'domains';
import 'i18n';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/cars/create" component={CarCreate} />
          <Route path="/cars/:id" component={CarDetails} />
          <Route path="/cars" component={CarsList} />
          <Route path="/drivers/create" component={DriverCreate} />
          <Route path="/drivers/:id" component={DriverDetails} />
          <Route path="/drivers" component={DriversList} />
          <Route path="/orders/create" component={OrderCreate} />
          <Route path="/orders/:id" component={OrderDetails} />
          <Route path="/orders" component={OrdersList} />
          <Route path="/" component={Homepage} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

document.getElementById('root').style.height = '100%';

// todo: simplify api Client
// todo: add global error handling (snackbar?) - check React Error Boundaries
