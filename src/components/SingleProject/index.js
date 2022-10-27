import React from 'react'

const Project = ({project}) => {
  return (
    <div className='project'>
    <h3>{project.name}</h3>
        <img key ={project.id} src={require(`../../assets/project-img/${project.image}`)} className="img-thumbnail mx-1" alt={project.name}/>
        <a href={`${project.url}`} target="_blank">{project.url}</a>    
  </div>     
)
}

export default Project
