import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Cars, Drivers } from 'domains';

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

    <Route path="/cars" component={Cars} />
    <Route path="/drivers" component={Drivers} />
  </div>
);

export default App;
