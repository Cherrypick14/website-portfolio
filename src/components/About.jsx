import React,{useState} from 'react'
import '../styles/about.css'

import Education from './Education'

import Skills from './Skills'

import { Container, Row, Col } from 'reactstrap'

const About = () => {

    const [aboutfilter, setAboutFilter] = useState('ABOUT')
  return <section id="about">
      <Container>
          <Row>
              <Col lg='12' className='mb-5'><h2>About Me</h2></Col>
              <Col lg='4' md='3'>
                  <div className='about_btns d-flex flex-column align-items-center'>
                      <button className='about_btn about_btn-active' onClick={()=>setAboutFilter('ABOUT')}>About Me</button>
                      <button className='about_btn' onClick={()=>setAboutFilter('EDUCATION')}>Education</button>
                      <button className='about_btn'onClick={()=>setAboutFilter('SKILLS')}>Skills</button>
                      
                  </div>
              </Col>
              <Col lg='8' md='9'>
                  {aboutfilter === 'ABOUT' && <div className="about_content_wrapper d-flex gap-5">
                      <div className="about_img w-25">
                        <img src={process.env.PUBLIC_URL + "/newkiddo.png"} className="w-100" alt="aboutprofile" />
                      </div>
                     
                     <div className="about_content w-75">
                        <h2 className='mt-2'>I'm Cheryl Petra</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam officia iure dolor atque illum maxime officiis molestias saepe quae veritatis quam, ullam non dolore possimus soluta assumenda blanditiis ipsam?
                        temporibus inventore dolorum aut dignissimos laboriosam voluptas ullam in quisquam nostrum, fugit nobis eveniet ab exercitationem. Fugiat corrupti aspernatur, voluptates vel totam architecto dignissimos voluptas dolore perspiciatis nemo sit!</p>
                          <div className="social_links">
                           <h6 className='mb-3'>Let's Connect</h6>
                           <span>
                               <a href="https://twitter.com/owalacheryl" target="_blank">
                                   <i class="ri-twitter-fill"></i>
                                   </a>
                               </span>
                           <span>
                               <a href="https://github.com/Cherrypick14" target="_blank">
                                   <i class="ri-github-fill"></i>
                                   </a>
                                   </span>
                           <span>
                               <a href="https://www.linkedin.com/in/cheryl-owala-423731191/" target="_blank">
                                   <i class="ri-linkedin-fill"></i>
                                   </a>
                                   </span>
                           <span>
                               <a href="#">
                                   <i class="ri-instagram-fill"></i>
                                   </a>
                                   </span>
                       </div>
                     </div>
                       
                  </div>
                  }
                  {
                    aboutfilter === 'EDUCATION' && <Education />
                  }

                  {
                    aboutfilter === 'SKILLS' && <Skills />
                  }
              </Col>
          </Row>
      </Container>
  </section>
}

export default About