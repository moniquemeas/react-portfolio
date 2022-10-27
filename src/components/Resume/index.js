import React from 'react'

function Resume() {
  return (
    
    <div>
        <h1>Resume</h1>
        <a href="../../assets/Monique.Meas.Resume.pdf" download="Monique.Meas.Resume.pdf">Click Here to Download My Resume</a>
    <div className='my-5'>
    <ul className='resume'>
      <li>
        <h2>Education</h2>
        <h4>Bachelor Degree in Computer Science</h4>
        <p>2011 - University of Phoenix</p>
        
        <h4>Associate Degree in Computer Science</h4>
        <p>2009 - San Diego Community College</p>
       
      </li>
      
      <li>
        <h2>Technical Training</h2>
        <p>CCNP - Routing and Switching (2022)</p>
        <p>CCNA - Routing and Switching (2022)</p>
        <p>AWS Certified Cloud Practitioner (2025)</p>
        <p>Cisco Meraki</p>
        <p>VeloCloud SDWAN</p>
        <p>Frontend development (HTML, CSS and JavaScript), REACT</p>
        <p>Database (MySQL, MongoDB, GraphQL)</p>
        <p>Backend development (Node.js; express.js)</p>

      </li>
      
      
    </ul>
    </div>
    </div>
      
    
  )
}

export default Resume