import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { Link as L } from 'react-router-dom'

//import { MenuIcon, XIcon } from '@heroicons/react/outline';
const MenuIcon = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

  )
}

const XIcon = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

  )
}


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 fixed drop-shadow-lg text-white bg-blend-overlay bg-slate-500 bg-opacity-80 shadow-md ' >
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>VJTI TPO</h1>
          <ul className='hidden md:flex gap-6'>
          <li><Link className="cursor-pointer hover:text-blue-300" to="home" smooth={true} duration={500}>Overview</Link></li>
          <li><Link className="cursor-pointer hover:text-blue-300" to="about" smooth={true} offset={-200} duration={500}>Why Recruit</Link></li>
          <li><Link className="cursor-pointer hover:text-blue-300" to="support" smooth={true} offset={-50} duration={500}>Director's Message</Link></li>
          <li><Link className="cursor-pointer hover:text-blue-300" to="platforms" smooth={true} offset={-100} duration={500}>Recruitment Process</Link></li>
          <li><a className="cursor-pointer hover:text-blue-300" href="https://vjti.ac.in/wp-content/uploads/2021/09/200625_TAG5C___VJTI_TPO_Brochure_and_Courses_available_at_VJTI.pdf" 
          smooth={true} offset={-100} duration={500}>Brochure</a></li>
          <li><a className="cursor-pointer hover:text-blue-300" href="https://vjti.ac.in/wp-content/uploads/2022/10/B.Tech-Placement-report-2021-22.pdf" 
          smooth={true} offset={-100} duration={500}>Placement Summary</a></li>
      
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <L to="/category">
          <button className='px-8 p-4 z-50 hover:bg-white hover:text-black transition-all rounded-lg'>
          Sign In
          </button></L>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full '><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

            {/* <button className='text-indigo-600 px-8 py-3 mb-4 z-auto' onClick={ console.log("Clicked")}><L to="/category">Sign In</L></button>  */}
      </ul>
    </div>
  );
};

export default Navbar;
