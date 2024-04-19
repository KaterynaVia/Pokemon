import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
    
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
    </nav>
    <Outlet />
    </>
  );
}


export default Root;
