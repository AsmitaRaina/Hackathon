import React from 'react'
import Contacts from '../components/company components/contacts';
import Dashboard from '../components/company components/dashboard'
import Sidebar from '../components/company components/global/Sidebar'
import HR from '../components/company components/hr';

const CompanyScreen = () => {
  const path = window.location.pathname;
  console.log(window.location.pathname);
  return (
    <div className='flex'>
    <div >
      <Sidebar  type={`company`}   />
    </div>
    {
      path === '/company' ? 
      <div className="w-full">
        <></>
      </div> : 
      path === '/company/history' ?
      <div className="w-full">
        <Contacts/>
      </div> : 
      path === '/company/hr' ?
      <div className="w-full">
        <HR/>
      </div> : <></>
    }
    
    </div>
  )
}

export default CompanyScreen