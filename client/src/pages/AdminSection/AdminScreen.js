import React, { useState } from 'react'
import Announcements from '../../components/Annoucements';
import Contacts from '../../components/company components/contacts';
import Sidebar from '../../components/company components/global/Sidebar';
import TemporaryDrawer from '../../components/Drawer';
import Drawer from '../../components/Drawer';
import Message from '../../components/Message';
import Navbar from '../../components/Navbar'
import AnnouncementScreen from './AnnouncementScreen';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';


const AdminScreen = () => {
  const pages = ['Announcements', 'Students'];
  const settings = ['Profile', 'Dashboard', 'Logout'];
  const items = ['Latest', 'Unread', 'Top']
  const [showMessage, setShowMessage] = useState(false);
  const path = window.location.pathname;
  console.log(window.location.pathname);
  return (
    <>
      <div className='flex'>
        <div >
          <Sidebar type={'admin'}  type2={'announcements'}/>
        </div>
        {
          // path === '/admin' ? 
          // <div className="w-full">
          //   <>

          //   </>
          // </div> : 
          path === '/admin/announcements' ?
          <div className="w-full">
            <AnnouncementScreen/>
          </div> : 
          path === '/admin/history' ?
          <div className="w-full">
            <Contacts/>
          </div> :
          path === '/admin/calendar' ?
          <div className="w-full">
            <iframe src="https://embed.lottiefiles.com/animation/136204" className='fixed w-screen h-full'></iframe>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=c2FtZWVyZ3VwdGE0ODczQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb205NmE0NTYxN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043&color=%230047a8" style={{ border: "solid 1px #777" }} width="100%" height="100%" frameborder="0" className='fixed' />
          </div> :
          <></>
        }
      </div>
    </>
  )
}

export default AdminScreen