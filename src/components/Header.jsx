import React from 'react'
import { Container } from 'reactstrap'
import '../styles/header.css'

const navlinks=[
   {
    display:"Home",
    url:"#home"
   },
   {
   display:"About",
    url:"#about"
   },
   {
   display:"Blog",
    url:"https://cheryl.hashnode.dev/bootcamp-experience"
   },
   {
   display:"Contacts",
    url:"#contacts"
   },

]
const Header = () => {
  return (
    <header className='header'>
        <Container>
            <div className='navigation d-flex align-items-center justify-content-between'>
                <div className='logo'><h5>cheryl.dev</h5></div>
                <div className='nav_menu'>
                  <ul className="nav_list">
                      
                      {navlinks.map((item, index)=><li className="nav_list_item" key={index}>
                          <a href={item.url}>{item.display}</a>
                      </li>)}
                      
                  </ul>
              </div>

               <div className="nav-right">
                   <span className='mobile_menu'><i class="ri-menu-5-line"></i></span>
               </div>
            </div>
             
        </Container>
    </header>
  )
}

export default Header