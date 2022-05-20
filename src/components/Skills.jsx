import React from 'react'
import "../styles/skills.css"

const frontendSkills =[{
    title:'Javascript',
   
    percentage:'83%'

},
{
    title:'React.js',
   
    percentage:'70%'

},
{
    title:'Bootstrap',
   
    percentage:'90%'

},
{
    title:'Redux',
   
    percentage:'60%'

},

]

const backendSkills =[{
    title:'Node.js',
   
    percentage:'70%'

},
{
    title:'Express.js',
   
    percentage:'70%'

},
{
    title:'Mongo',
  
    percentage:'80%'

},
{
    title:'Python',
  
    percentage:'70%'

},

]
const Skills = () => {
  return <div className="skills_wrapper d-flex gap-5">
     
      <div className="frontend_skill w-50">
          {
              frontendSkills.map((item, index)=>(
                  <SkillItem 
                   key={index}
                   title={item.title}
                   percentage={item.percentage}/>
                   
               ) )
          }
      </div>
    <div className="backend_skill w-50">

        {
            backendSkills.map((item, index)=>(
             <SkillItem 
             key ={index}
             title={item.title}
             percentage={item.percentage}
             />
            ))
        }
    </div>

  </div>
}
const SkillItem =({title, percentage})=>{
 return <div className="skill_data mb-2">
                      <div className="skill_title d-flex align-items-center justify-content-between">
                          <h6>{title}</h6>
                          <span>{percentage}</span>
                      </div>
                      <div className="skill_bar">
                      <span className="skill_bar-percentage" style={{width:`${percentage}`}}> </span>

                      </div>
                   </div>
}

export default Skills