import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiLogIn} from 'react-icons/bi'
import {GoEyeClosed} from 'react-icons/go';
import {BiLogOut} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../css/AddItems_Section.css'
import '../css/Sidebar.css'
const Sidebar = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <Navbar className={`header ${isOpen?null:"width_dynamic"} header_sidebar`} >
    <Container className='flex-col'>
      <div className="sidebar_open_icon menu_bar_icon" onClick={()=>setIsOpen(!isOpen)}>
    {isOpen?<GoEyeClosed/>:<GiHamburgerMenu/>
    
  } 
       </div>
       {
         isOpen?
        <Nav className="me-auto flex-col my-2 nav_right_container">
      <Nav.Link>
      <Link className='color_white' to="/login">
            <BiLogIn/>
            Login
            </Link>
  
      </Nav.Link>
         
<Nav.Link>
<Link className='color_white' to="/signup">
          <BiLogOut/>Sign Up
            </Link>
</Nav.Link>
<Nav.Link>
<Link className='color_white' to="/formikData">
         FormikDAta
            </Link>
</Nav.Link>
          
  
          {/* <Nav.Link href="#pricing" className='color_white'>Dashboard</Nav.Link> */}
        </Nav>
        :
  <Nav className="me-auto flex-col my-2 nav_right_container">
    <Nav.Link>
    <Link className='color_white' to="/login">
            <BiLogIn/>
      
            </Link>
    </Nav.Link>
   
     <Nav.Link>
     <Link className='color_white' to="/signup">
          <BiLogOut/>
            </Link>
    </Nav.Link>

          
  
    {/* <Nav.Link href="#pricing" className='color_white'>Dashboard</Nav.Link> */}
  </Nav> 
       }
  
    </Container>
  </Navbar>
  )
}

export default Sidebar