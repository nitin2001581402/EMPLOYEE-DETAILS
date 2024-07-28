import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/view">View Employees</Link></li>
          <li><Link to="/insert">Insert Employee</Link></li>
        </ul>
      </nav>
    </div>
  );
}
