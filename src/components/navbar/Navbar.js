import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Contact from '../contact/Contact'
import Project from '../projects/Project'
import './navbar.css'
import logo from '../../assets/Thanush-removebg-preview.png'


const Navbar = () => {
  const navigate =  useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  }
  return (
    <>
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/" onClick={handleLogoClick}>
          <img src={logo} alt="Logo"  className='logo-img'/>
        </Link>

      </div>
  

      <div class="links">
        <Link to="/" className="link"><p>Home</p></Link>
        
        <Link to="/contact" className="link"><p>Contact</p></Link>
        <Link to="/projects" className="link"><p>Projects</p></Link>
        {/* <Link to="/resume" className="link"><p>Resume</p></Link> */}
        <Link to ='/skills' className='link'><p>Skills</p></Link>
      </div>
        
    </nav>
    
    
    </>
    
  )
}

export default Navbar