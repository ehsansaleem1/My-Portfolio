import './projects.css'
import ProjectContent from './projectcontent'

export default function Projects() {
  return(
    <main>
      <h1 className='head-projects'>{ProjectContent.title}</h1>
      {ProjectContent.projects.map((project, i) => {
        return(
          <div key={i} className='project-container'>
            <div>
              <h1>{project.name}</h1>
              <h2>{project.description}</h2>
              <h3>Github Link - <a href={project.github}>{project.github}</a></h3>
              <h3>Replit Link - <a href={project.Replit}>{project.Replit}</a></h3>
            </div>
            <img src={project.image} />
          </div>
        )
      })}
    </main>
  )
}