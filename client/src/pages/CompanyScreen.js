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
      path === '/company/calendar' ? 
      <div className="w-full">
        <><iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=c2FtZWVyZ3VwdGE0ODczQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb205NmE0NTYxN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043&color=%230047a8" style={{border:"solid 1px #777"}} width="100%" height="100%" frameborder="0" /></>
      </div> :
      path === '/company/hr' ? 
      <div className="w-full">
        <></>
      </div>  :<></>
    }
    
    </div>
  )
}

export default CompanyScreen