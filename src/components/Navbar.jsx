import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //navigate to other part of pages

import { styles } from '../styles';  //Tailwind styles
import { navLinks } from '../constants/index'  //array of just [id, title]  
import { menu, close } from '../assets';  //svg images  
import logo  from '../assets/logo.png'
const Navbar = () => {

  const [active,setActive] = useState("")  //required to see which page are we active in , About,Home,etc
  const [toggle,setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}>        
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>     
        <Link 
        to = '/'
        className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain rounded-full"></img>
          <p className='text-white text-[18px] flex font-bold cursor-pointer'>Arnav More &nbsp;<span className='sm:block hidden'>|&nbsp; DJSCE IT</span></p> 
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key = {link.id}
              className={ `${active === link.title? "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer` }
              onClick={()=> setActive(link.title)}
            >
               
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle?close: menu} alt="Menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=> setToggle(!toggle)}
          ></img>

          <div className={`${!toggle ?"hidden":"flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end flex-start gap-10 flex-col'>
          {navLinks.map((link) => (
            <li 
              key = {link.id}
              className={ `${active === link.title? "text-white":"text-secondary"}  text-[16px] font-medium font-poppins cursor-pointer` }
              onClick={()=> {
                setToggle(!toggle)
                setActive(link.title)
              }}
            >
               
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>


      </div>
        
    </nav>
  )
}

export default Navbar