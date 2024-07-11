import React, { useState } from 'react'


export default function Header() {
const [currentTab,setTab]=useState("Home")


  return (
    <div>
        <nav className='navBar'>
          
            Logo
            <ul>
                <li onClick={()=>setTab("home")}>Home</li>
                <li onClick={()=>setTab("explore")}>Explore</li>
                <li onClick={()=>setTab("about us")}>About Us</li>
                <li onClick={()=>setTab("contact")}>Contact Us</li>
            </ul>

            <div>
              <h1>Home Section</h1>
            </div>
            <div>
              <h1>Explore Section</h1>
            </div>
            <div>
              <h1>About Us Section</h1>
            </div>
            <div>
              <h1>Contact Section</h1>
            </div>
            
        </nav>
    </div>
  )
}
