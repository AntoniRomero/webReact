import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
            
            <img className='img' src='https://images.pexels.com/photos/354304/pexels-photo-354304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300' />
            
        <p>lorem ipsun</p>
        </div>
       <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
         <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Sports</li>
          <li className='sidebarListItem'>Cinema</li>
          <li className='sidebarListItem'>Tech</li>
          </ul>
      </div>
      <div className='sidebarItem'>
       <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
      
          <i className='leftIcon fa-brands fa-facebook'></i>
          <i className='leftIcon fa-brands fa-twitter-square'></i>
          <i className='leftIcon fa-brands fa-instagram'></i>
          </div>
       </div>
      </div>
    
   
  )
}
