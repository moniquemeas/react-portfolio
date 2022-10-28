import React from 'react'
import Project from '../SingleProject';

function Projects() {
  const projects =[
    {
      id: 1,
      name: "Now We're Cooking!",
      image: "img0.jpg",
      url: "https://moniquemeas.github.io/now-were-cookin/"
  },
  {
      id: 2,
      name: "Code Quiz Challenge",
      image: "img1.jpg",
      url: "https://moniquemeas.github.io/Java-quiz/"
  },
  {
      id: 3,
      name: "Task Expert",
      image: "img2.jpg",
      url: "https://task-expert.herokuapp.com/"
  },
  {
      id: 4,  
      name: "Weather App",
      image: "img3.jpg",
      url: "https://moniquemeas.github.io/Weather-Dashboard/"
  },
  {
    id: 5,  
    name: "Note Taker App",
    image: "img4.jpg",
    url: "https://note-taker-meas.herokuapp.com/"
},
{
  id: 6,  
  name: "Just Anoter Text Editor",
  image: "img5.jpg",
  url: "https://intense-springs-58376.herokuapp.com/"
}
  ]
  return (
    <>
    <h1 className='my-5'>My Projects</h1>
      {projects.map((project) => (
      
      <Project key={project.id} project={project} />
      ))}
    </>
  )
}

export default Projects

