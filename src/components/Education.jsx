import React from 'react'
import '../styles/education.css'

const Education = () => {
  return <table className="table">
         <thead>
          <tr>
                 <th>Major</th>
                 <th>Department</th>
                 <th>Institute</th>
                 <th>Year</th>
             </tr>
           
         </thead>
         <tbody>
             <tr>
                 <td>Computer Technology</td>
                 <td>Computer Science</td>
                 <td>Murang'a Univeristy</td>
                 <td>2018-Present</td>
             </tr>
             <tr>
                 <td>IoT</td>
                 <td>Electrical and electronics engineering</td>
                 <td>Chegg</td>
                 <td>Present</td>
             </tr>
             <tr>
                 <td>Software Engineering</td>
                 <td>Computer Science</td>
                 <td>Youtube and Twitter University</td>
                 <td>2018-Present</td>
             </tr>

         </tbody>
  </table>
}

export default Education