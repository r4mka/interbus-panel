import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { CarsList, DriversList, CarDetails, DriverDetails } from 'domains';

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/drivers/">Drivers</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/cars/:id" component={CarDetails} />
      <Route path="/cars" component={CarsList} />
      <Route path="/drivers/:id" component={DriverDetails} />
      <Route path="/drivers" component={DriversList} />
    </Switch>
  </div>
);

export default App;
