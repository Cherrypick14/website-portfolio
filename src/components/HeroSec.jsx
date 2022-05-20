import React, {useRef, useEffect} from 'react'
import '../styles/hero-sec.css';

import { Container,Row,Col } from 'reactstrap'

import { init } from 'ityped'

const HeroSec = () => {

    const textRef = useRef()

useEffect(()=>{

    init(textRef.current,{

         backDelay:1500,
         showCursor:true,
         strings:[
             'Cheryl Petra',
             'a Web Developer',
             'a Technical Writer'
         ]
    })

    }, [])
  return <section className='hero_sec' id="home">
      <Container>
          <Row>
              <Col lg='6' md='6'>
                  <div className="hero_content">
                      <p className='mb-3'>Get to know me</p>
                      {/* <h5></h5> */}
                      <h2 className='hero_title mb-4'>I'm 
                        <span ref={textRef}></span>
                        </h2>
                      <p> 
                    Hello Technophiles, welcome to my portfolio... I'm a passionate web developer and I have an art and design background.
                    Born ready and coffee is my favorite beverage. That's how I bring ideas to life! with a short of that

                    </p>
                      <div className="hero_btns d-flex align-items-center gap-4 mt-4">
                          <button className='btn hire_btn'><a href="#">Hire me</a></button>
                          <button className='btn contact-btn'>Contact</button>
                      </div>
                  </div>
              </Col>
              <Col lg='6' md='6'>
                  <div className="hero-img">
                      <img src={process.env.PUBLIC_URL + "/newkiddo.png"} className="w-100"alt="profile" />
                  </div>
              </Col>
          </Row>
      </Container>
  </section>
    
}

export default HeroSec