import React from 'react';

function Nav() {

  return (
   
   <nav>
    <h1>Monique Meas</h1>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Portfolio</span>
      </li>
      <li>
        <span>Contact</span>
      </li>
      <li>
        <span>Resume</span>
      </li>
    </ul>
  </nav>

  );
}

export default Nav;
