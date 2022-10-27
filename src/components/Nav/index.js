
import React from 'react';

function Nav({activeSection, setActiveSection}) {
  console.log(activeSection)

  return (
   
   <nav>
    <header>
    <h1 id="name">Monique Meas</h1>
    <div className='container'>
    <ul className="links">
      <li onClick={()=> setActiveSection('about')}>
       About Me
      </li>
      <li onClick={()=> setActiveSection('projects')}>
      Projects
      </li>
      <li onClick={()=> setActiveSection('resume')}>
      Resume
      </li>
      <li onClick={()=> setActiveSection('contact')}>
      Contact
      </li>
      
    </ul>
    </div>
    </header>
  </nav>

  );
}

export default Nav;
