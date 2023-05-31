import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"


const Navbar = () => {
  const [nav, setNav]= React.useState(true)
  const links=[
    {
      id:1,
      link: "home"
    },
    {
      id:2,
      link: "about"
    },
    {
      id:3,
      link: "portfolio"
    },
    {
      id:4,
      link: "experience"
    },
    {
      id:5,
      link: "contact"
    }
  ]
  return (

    <div className="flex justify-between items-center w-full 
      h-20 fixed text-white bg-black px-3 py-1">

        <div>
          <h1 className='font-signature text-5xl ml- 
           2'>Aryan</h1>
        </div>

        <ul className='flex justify-between items-center px- 
          4 hidden md:flex'>
          {links.map(a=>{
            return <li className='px-4 cursor-pointer 
              capitalize font- 
            medium text-gray-500 hover:scale-90 duration- 
            100 flex'>
              <Link to={a.link} smooth duration={500}>{a.link}</Link>
            </li>})}  
        </ul>

        <div className='cursor-pointer pr-3 z-10 md:hidden' 
        onClick= 
        {()=>setNav(!nav)}>
          {nav? <FaBars size={30}/> : <FaTimes size={30}/>}
        </div>

        {!nav &&
        <ul className='flex flex-col justify-center items-center w-full h-screen top-0 left-0 bg-gradient-to-b from-black to-gray-800 absolute '>
          {links.map(a=>{
            return <li className='px-4 cursor-pointer 
              capitalize font-7xl  text-gray-500 hover:scale-90 duration- 
            100 flex py-4 '>
              <Link to={a.link} onClick={()=>setNav(!nav)} smooth duration={500}>{a.link}</Link>
            </li>})} 
        </ul>}
    </div>
  )
}

export default Navbar
