import React from 'react'
import "../styles/contact.css"

import { Container, Row, Col } from 'reactstrap'

import Form from './Form'
const Contact = () => {
  return <section id="contacts">
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>Get in touch</h2>
                </Col>

                <Col lg='6' md='6'>
                    <div className="contact_info_container d-flex align-items-center gap-5">
                         <div className="single_info-box w-50">
                             <h6>Address</h6>
                             <p> 00100 Nairobi, Kenya</p>
                         </div>
                         <div className="single_info-box w-50">
                             <h6>Phone</h6>
                             <p>+254-750-880-802</p>
                         </div>
                    </div>
                         <div className='"contact_info_container d-flex align-items-center gap-5'>

                                <div className="single_info-box w-50">
                                   <h6>Email</h6>
                                    <p>owalacheryl@gmail.com</p>
                              </div>
                         <div className="single_info-box w-50">
                             <h6>Location</h6>
                             <p>Ongata, Rongai ~ Maasai Lodge</p>
                         </div>
                     </div>
                       
                </Col>
                <Col lg="6" md="6">
                   <Form />
                </Col>
            </Row>
        </Container>


  </section>
}

export default Contact