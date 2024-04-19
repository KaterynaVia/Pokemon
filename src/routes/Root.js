import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link >
      <Link to="/about">About</Link>
    </nav>
    <Outlet />
    </>
  );
}


export default Root;