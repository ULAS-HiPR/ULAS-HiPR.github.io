import React from 'react';
import '../css/NavBar.css';
import '../css/App.css';

const NavBar = () => {
  return (

    <nav>
      <div class='container'>
        <ul>
          <li class="home"><a href="/">Home</a></li>
          <li><a href="/">Get Involved</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">About</a></li>
      </ul>
      </div>
    </nav>

  );
};

export default NavBar;