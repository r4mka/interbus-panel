import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <nav>
    <ul>
      <li>
        <Link to="/cars">Samochody</Link>
      </li>
      <li>
        <Link to="/drivers/">Kierowcy</Link>
      </li>
    </ul>
  </nav>
);

export default Homepage;
