import React, {useState} from 'react';
import classNames from 'classnames';

function Nav({activeSection, setActiveSection}) {

  const [isActive, setIsActive] = useState(false)
  
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
   
   <nav>
    <header>
    <h1 id="name">Monique Meas</h1>
    <div className='container'>
    <ul className="links">
      <li className={`"inactive"${isActive && 'navActive'}`}
      onClick={()=> 
        {handleClick()
          setActiveSection('about')}}>
       About Me
      </li>
      <li  className={`"inactive"${isActive && 'navActive'}`}
      onClick={()=> {
        handleClick()
        setActiveSection('projects')}}>
      Projects
      </li>
      <li className={`"inactive"${isActive && 'navActive'}`}
      onClick={()=> 
        {handleClick()
          setActiveSection('resume')}}>
      Resume
      </li>
      <li className={`"inactive"${isActive && 'navActive'}`}
      onClick={()=> 
        {handleClick()
          setActiveSection('contact')}}>
      Contact
      </li>
      
    </ul>
    </div>
    </header>
  </nav>

  );
}

export default Nav;
