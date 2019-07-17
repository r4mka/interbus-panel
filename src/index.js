import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from 'store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// todo: reduce actions boilerplate with useApi hook
// todo: install styled-components, facepaint, rebass-grid, ant-design
// todo: simplify api Client
// todo: add global error handling (snackbar?) - check React Error Boundaries
