import './skills.css'
import SkillContent from './skillcontent'

export default function Skills() {
  return(
    <main className='skills-section'>
      <h1 className='title-skills'>{SkillContent.title}</h1>
      <div className='flex-container'>
        <div className='flex-item cont-side'>
          <h2>{SkillContent.skillspara}</h2>
        </div>

        <div className='flex-item'>
          {SkillContent.skills.map((skill, i) => {
            return(
              <div key={i} className='item'>
                <h2>{skill.name}</h2>
                <input className='slider' type='range' value={skill.percent} />
              </div>
            )
              
          })}
        </div>
      </div>
    </main>
  )
}