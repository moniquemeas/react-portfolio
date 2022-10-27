import React from 'react';
import avatar from '../../assets/avatar.jpg'



function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={avatar} className="profileImg my-2" alt="" />
      <div className="my-2">
        <p>
        My name is Monique Meas. Technology has always been my passion. I've been working in telecommuncation industry over 9 years as a network technician.
I have strong knowledge in customer service and troubleshooting various network technologies.
Ability to effectively define, communicate and resolve complex issues to fulfill project goals. 
Excel at providing comprehensive support and implementation of large networks.
I have decided to switch my career path toward Clould services and software development.
I recently earned my AWS Cloud Practioner certification and completed my Full-Stack Development bootcamp at University of Central Florida.
I'm looking for an entry level software developer opportunity to work with dynamic company that allows me to utilize my education and experiences. 

        </p>
    
    </div>
    </section>
    
  );
}

export default About;